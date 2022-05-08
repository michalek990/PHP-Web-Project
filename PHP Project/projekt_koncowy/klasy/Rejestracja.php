 <?php

class Rejestracja {

    protected $uzytkownik;

    function __construct() {
        ?>
        <section class="py-5">
            <div class="container px-5">
                <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <div id="formularz" class="text-center mb-5">
                        <h1 class="fw-bolder">Formularz rejestracyjny:</h1>
                    </div>
                    <form action="formularzRejes.php" method="post">
                        <div class="form-floating mb-3">
                            <input class="form-control" id="userName" name="userName" type="text" />
                            <label for="userName">Nazwa użytkownika</label>
                            <p id="userName_error" style="color:red"></p>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="fullName" name="fullName" type="text" />
                            <label for="fullName">Imię i nazwisko</label>
                            <p id="fullName_error" style="color:red"></p>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="passwd" name="passwd" type="text" />
                            <label for="passwd">Hasło</label>
                            <p id="passwd_error" style="color:red"></p>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="email" name="email" type="text" />
                            <label for="email">Email</label>
                            <p id="email_error" style="color:red"></p>
                        </div>
                        <br/>
                        <div class="text-center"> 
                            <br /><input class="btn btn-outline-success" type="submit" name="rejstr" value="Rejestruj" />
                            <input class="btn btn-outline-danger" type="reset" name="reset" value="Anuluj" />
                        </div> 
                    </form>
        <?php
    }

    function checkUser() {
        $args = [
            'userName' => ['filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => '/^[0-9A-Za-ząęłńśćźżó_-]{2,25}$/']
            ],
            'fullName' => ['filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => '/^[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20}(\s[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20})*$/']
            ],
            'passwd' => ['filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => '/^[0-9A-Za-ząęłńśćźżó_-]{2,25}$/']
            ],   
            'email' => ['filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => '/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/']
            ],
        ];
        //przefiltruj dane:
        $dane = filter_input_array(INPUT_POST, $args);
        $errors = "";
        foreach ($dane as $key => $val) {
            if ($val === false or $val === NULL) {
                $errors .= $key . " ";
            }
        }     
        if ($errors === "") {
            //Dane poprawne – utwórz obiekt uzytkownik
            $this->uzytkownik = new uzytkownik($dane['userName'], $dane['fullName'], $dane['email'], $dane['passwd']);
        } else {
            $this->uzytkownik = NULL;
        }
        return $this->uzytkownik;
    }

}

