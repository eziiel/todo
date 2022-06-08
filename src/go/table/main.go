package main

import (
	"database/sql"
	"log"
	"fmt"
	_"github.com/go-sql-driver/mysql"
)

// var db *sql.DB
func acessDB() {
	//acess database
	fmt.Println("--criando e inserindo dados na tabela")
	
	user := "xxxxxxx"
	passWord := "xxxxxxx"
	dataName := "xxxxxxx"

	db, erroAccess := sql.Open("mysql", user+passWord+"@tcp(localhost:3306)/"+dataName)
	if erroAccess != nil {
		log.Println("erro em acesso:" + erroAccess.Error())
	}
	dbPing := db.Ping()
	if dbPing != nil {
		log.Println("lost conection whith:" + dbPing.Error())
	}

	//drop if exists
	fmt.Println("--Apagando tabela se ela existir")

	_, errDrop := db.Exec("DROP TABLE IF EXISTS todolist;")
	if errDrop != nil {
		log.Println("error Drop:" + errDrop.Error())
	}

	//create table
	fmt.Println("--criando Table")
	
	_, errCreate := db.Exec(
		"CREATE TABLE todolist (" +
		"id INT NOT NULL AUTO_INCREMENT," +
		"todo VARCHAR (100) NOT NULL," +
		"PRIMARY KEY(`id`)" +
		");",
	)
	if errCreate != nil {
		log.Println("error Create:" + errDrop.Error())
	}
	
	_,errInsert := db.Exec("INSERT INTO todoList (todo) VALUES ('run')")

	if errInsert != nil {
		log.Println("error Insert:" + errInsert.Error())
	}

}

func main() {
	acessDB()
}
