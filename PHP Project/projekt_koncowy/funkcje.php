<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);



    function print_server_config() {
        foreach($_SERVER as $key => $value) {
            echo $key."=".$value."<br>";
        }
    }

    function walidacja() {
        $args = [
            'nazwa' => ['filter' => FILTER_VALIDATE_REGEXP, 'options' => ['regexp' => '/^[A-Z]{1}[a-ząęłńśćźżó-]{1,25}$/']],
            'imie' => ['filter' => FILTER_VALIDATE_REGEXP, 'options' => ['regexp' => '/^[A-Z]{1}[a-ząęłńśćźżó-]{1,25}$/']],
            'mail' => FILTER_VALIDATE_EMAIL,

        ];
        $dane = filter_input_array(INPUT_POST, $args);

        $errors = "";
        foreach ($dane as $key => $val) {
            if ($val === false or $val === NULL) {
                $errors .= $key . " ";
            }
        }

        if (!($errors === "")) {
            echo "<br>Nie poprawne dane: " . $errors;
        }

        if (!empty($_REQUEST['id'])) {
            echo "<br>Przy dodawaniu danych do bazy nie możesz podawać ID";
        }
        return empty($errors) && empty($_REQUEST['id']);
    }




    function dodajdoBD($bd) {
        if(!walidacja()) {
            return;
        }

        $bd = mysqli_connect(
            'localhost',
            'root',
            '',
            'projekt');
        $name = $_POST['imie'];
        $nazwisko = $_POST['nazwa'];
        $mail = $_POST['mail'];
        $sql = "INSERT INTO klienci (Id, Imie, Nazwisko, Email) VALUES ('NULL',  '$name',  '$nazwisko' , '$mail')";

        $bd->query($sql);
    }
    function usunzBD($bd){

        $bd = mysqli_connect(
            'localhost',
            'root',
            '',
            'projekt');


        $email =  $_POST['mail'];
        $sql = "DELETE FROM klienci WHERE (Email='$email' )";

        $bd->query($sql);

    }
    function usun($bd){

        $bd = mysqli_connect(
            'localhost',
            'root',
            '',
            'projekt');


        $id =  $_POST['id'];
        $sql = "DELETE FROM `zapisani` WHERE `zapisani`.`id` = '$id'";

        $bd->query($sql);

    }


?>