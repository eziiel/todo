package main

import (
	"database/sql"
	"encoding/json"
	// "fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Todo struct {
	Id int `json:"id"`
	Todo string `json:"todo"`
}
var db *sql.DB

func home(w http.ResponseWriter, r* http.Request) {

	registro, erroR := db.Query("SELECT id,todo FROM todolist;")
	if erroR != nil{
		log.Println("erro em acessar db:" + erroR.Error())
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	var todolist []Todo = make([]Todo, 0)

	for registro.Next() {
		var todo Todo

		erroScan := registro.Scan( &todo.Id, &todo.Todo)
		if erroScan != nil {
			log.Println("erro listar todo:"+ erroScan.Error())
			continue
		}
		todolist = append(todolist, todo)
	}

	json.NewEncoder(w).Encode(todolist)
}


func router() {
	r :=mux.NewRouter()
	
	r.HandleFunc("/", home)
	

	headers := handlers.AllowedHeaders([]string{"X-Requested-With","Content-Type","Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "DELETE", "POST", "PUT", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})
	http.Handle("/",r)
	log.Fatal(http.ListenAndServe(":8083", handlers.CORS(headers,methods,origins)(r)))
}

func acessDB(){
	var errAbertura error
	db,errAbertura = sql.Open("mysql", "eziel:ezielEZIEL-10@tcp(localhost:3306)/todo")
	if errAbertura != nil {
		log.Fatal(errAbertura.Error())
	}
	
	dbPing := db.Ping()
	if dbPing != nil{
		log.Fatal(dbPing.Error())
	}
}

func main() {
	acessDB()
	router()
}