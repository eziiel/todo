package main

import (
	"database/sql"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	// "github.com/todo/cadastro"
)

type Todo struct {
	Id   int    `json:"id"`
	Todo string `json:"todo"`
}

var db *sql.DB

type MensagemErro struct {
	Erro string `json:"erro"`
}
func home(w http.ResponseWriter, r *http.Request) {

	registro, erroR := db.Query("SELECT id,todo FROM todolist;")
	if erroR != nil {
		log.Println("erro em acessar db:" + erroR.Error())
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	var todolist []Todo = make([]Todo, 0)

	for registro.Next() {
		var todo Todo

		erroScan := registro.Scan(&todo.Id, &todo.Todo)
		if erroScan != nil {
			log.Println("erro listar todo:" + erroScan.Error())
			continue
		}
		todolist = append(todolist, todo)
	}

	json.NewEncoder(w).Encode(todolist)
}

func Cadastrar(w http.ResponseWriter, r *http.Request) {

	body, erroReadBody := ioutil.ReadAll(r.Body)
	if erroReadBody != nil {
		log.Println("erro em leitura de dados:", erroReadBody.Error())
		return
	}
	var novoTodo Todo
	json.Unmarshal(body, &novoTodo)

	if len(novoTodo.Todo) == 0 || len(novoTodo.Todo) > 100 {
		w.WriteHeader(http.StatusUnprocessableEntity)
		json.NewEncoder(w).Encode(MensagemErro{"erro em campo de todo: 0 < item < 100 caracters "})
		return
	}

	_, errInsert := db.Exec("INSERT INTO todolist (todo) VALUES ( ? )", novoTodo.Todo)
	if errInsert != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(MensagemErro{"erro em inserir dados na tabela"})
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(novoTodo)
}

//function excluir 
func excluir(w http.ResponseWriter, r*http.Request) {

	vars := mux.Vars(r)
	id := vars["id"]

	_, erroExec := db.Exec("DELETE FROM todolist WHERE id = ?", id)

	if erroExec != nil {
		log.Println("erro em exclusao: " + erroExec.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}



func router() {
	r := mux.NewRouter()

	r.HandleFunc("/", home).Methods("GET")
	r.HandleFunc("/cadastrar", Cadastrar).Methods("POST")
	r.HandleFunc("/excluir/{id}", excluir).Methods("DELETE")

	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "DELETE", "POST", "PUT", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8083", handlers.CORS(headers, methods, origins)(r)))
}

func acessDB() {
	var errAbertura error
	db, errAbertura = sql.Open("mysql", "eziel:ezielEZIEL-10@tcp(localhost:3306)/todo")
	if errAbertura != nil {
		log.Fatal(errAbertura.Error())
	}

	dbPing := db.Ping()
	if dbPing != nil {
		log.Fatal(dbPing.Error())
	}
}

func main() {
	acessDB()
	router()
}
