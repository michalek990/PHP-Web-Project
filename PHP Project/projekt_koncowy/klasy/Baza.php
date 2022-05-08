<?php
    class Baza {
        private $mysqli;
        
        public function __construct($serwer, $user, $pass, $baza) {
            $this->mysqli = new mysqli($serwer, $user, $pass, $baza);
            if ($this->mysqli->connect_errno) {
                printf("Nie udało się połączenie z serwerem: %s\n", $this->mysqli->connect_errno);
                exit();
            }
            if (!$this->mysqli->set_charset("utf8")) {
                printf("Nie udało się zmienić kodowania na utf8");
                exit();
            }
        }

        function __destruct() {
            $this->mysqli->close();
        }

        public function select($sql, $pola) {
            $tresc = "";
            if ($result = $this->mysqli->query($sql)) {
                $ilepol = count($pola);
                $ile = $result->num_rows;
                $tresc .= "<table><tbody>";
                while ($row = $result->fetch_object()) {
                    $tresc .= "<tr>";
                    for ($i = 0; $i < $ilepol; $i++) {
                        $p = $pola[$i];
                        $tresc .= "<td>" . $row->$p . "</td>";
                    }
                    $tresc .= "</tr>";
                }
                $tresc .= "</table></tbody>";
                $result->close();
            }
            return $tresc;
        }

        public function selectAll($sql) {
            return $this->mysqli->query($sql);
        }

        public function insert($sql) {
            if ($this->mysqli->query($sql)) 
                return true;
            else 
                return false;
        }

        public function delete($sql) {
            if ($this->mysqli->query($sql))
                return true;
            else 
                return false;
        }

        public function getMysqli() {
            return $this->mysqli;
        }
    }
?>