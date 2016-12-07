'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Powiel blok',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Usuń komentarz',
        BLOCKLY_MSG_ADD_COMMENT: 'Dodaj komentarz',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Wejścia zewnętrzne',
        BLOCKLY_MSG_INLINE_INPUTS: 'Wejścia Inline',
        BLOCKLY_MSG_DELETE_BLOCK: 'Usuń blok',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Usuń %1 bloków',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Zwiń blok',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Rozwiń blok',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Wyłącz blok',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Włącz blok',
        BLOCKLY_MSG_HELP: 'Pomoc',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Zwiń wszystko',
        BLOCKLY_MSG_EXPAND_ALL: 'Rozwiń wszystko',
        LANG_VARIABLES_SET_ITEM: 'Element',
        LANG_RESERVED_WORDS: 'Słowo zarezerwowane, nazwa niedozwolona.',
        //bloki logiczne:
        LANG_CATEGORY_LOGIC: 'Logiczne',
        LANG_LOGIC_OPERATION_AND: 'i',
        LANG_LOGIC_OPERATION_OR: 'lub',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Wynik porównania czy obie wartości są równe.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Wynik porównania czy obie wartości są różne.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Wynik porównania czy pierwsza wartość jest mniejsza od drugiej.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Wynik porównania czy pierwsza wartość jest równa lub mniejsza od drugiej.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Wynik porównania czy pierwsza wartość jest większa od drugiej.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Wynik porównania czy pierwsza wartość jest równa lub większa od drugiej.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Wynik sprawdzenia czy jednocześnie obie wartości są prawdą.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Wynik sprawdzenia czy którakolwiek wartość jest prawdą.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'nie',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Zwraca zaprzeczenie podanej wartości.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'prawda',
        LANG_LOGIC_BOOLEAN_FALSE: 'fałsz',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Wartość logiczna: "prawda" lub "fałsz".',
        //bloki komunikacyjne:
        LANG_CATEGORY_COMMUNICATION: 'Komunikacyjne',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Odbiera dane przez Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Zwraca dane odebrane przez moduł Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Nadaje dane przez Bluetooth',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Nadajnik',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Wysyła dane wejściowe przez moduł Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Definicja Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Prędkość transmisji',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nazwa',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PinCode',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Odbierz',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Wyślij',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definicja modułu Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Dostępny port szeregowy Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Sprawdź czy jest dostępny port szeregowy Bluetooth.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Port szeregowy dostępny.',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Sprawdź czy jest dostępny port szeregowy.',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Odczyt liczby całkowitej z portu szeregowego',
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Pierwsza poprawnie odczytana długa liczba całkowita (long integer) z buforu portu szeregowego',
        LANG_ADVANCED_SERIAL_PRINT: 'Wydruk tekstu przez port szeregowy',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Drukuje dane jako tekst ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Wydruk linii tekstu przez port szeregowy',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Drukuje dane jako tekst ASCII i dodaje znak powrotu karetki (CR).',
        LANG_ADVANCED_SERIAL_READ: 'Odczyt przez port szeregowy',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Odczytuje dane przychodzące z portu szeregowego jako bajty.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Odczyt ciągu znaków przez port szeregowy',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Odczytuje dane przychodzące z portu szeregowego jako tekst ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Znaki specjalne',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Znak tabulatora',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Znak powrotu karetki (CR)',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Znak następnej linii (LF)',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Wpisuje znaki specjalne.',
        //bloki bq:
        LANG_CATEGORY_BQ: 'Bloki Octopus',
        LANG_BQ_BAT: 'BAT - czujnik ultradźwiękowy',
        LANG_BQ_BAT_RED_PIN: 'Echo PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'Wyzwalacz PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Zwraca odległość zmierzoną przez czujnik ultradźwiękowy.',
        LANG_BQ_BUTTON: 'Przycisk',
        LANG_BQ_BUTTON_PIN: 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP: 'Przycisk',
        LANG_BQ_BUTTONS: 'Płytka przycisków',
        LANG_BQ_BUTTONS_PIN: 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A: 'Przycisk #A',
        LANG_BQ_BUTTONS_BUTTON_B: 'Przycisk #B',
        LANG_BQ_BUTTONS_BUTTON_C: 'Przycisk #C',
        LANG_BQ_BUTTONS_BUTTON_D: 'Przycisk #D',
        LANG_BQ_BUTTONS_BUTTON_E: 'Przycisk #E',
        LANG_BQ_BUTTONS_TOOLTIP: 'Płytka zestawu przycisków',
        LANG_BQ_INFRARED: 'Czujnik podczerwieni',
        LANG_BQ_INFRARED_PIN: 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP: 'Zwraca wartość cyfrową odczytaną przez czujnik podczerwieni.',
        LANG_BQ_JOYSTICK: 'Dżojstik',
        LANG_BQ_JOYSTICK_PIN_X: 'Oś X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Oś Y PIN#',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Przycisk PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Pozycja dżojstika',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Dżojstik dwuosiowy z jednym przyciskiem.',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN#',
        LANG_BQ_LED_STATE: 'Stan LED',
        LANG_BQ_LED_ON: 'włączona',
        LANG_BQ_LED_OFF: 'wyłączona',
        LANG_BQ_LED_TOOLTIP: 'Dioda świecąca LED.',
        LANG_BQ_PHOTORESISTOR: 'Czujnik światła',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Zwraca wartość analogową zmierzoną przez czujnik światła.',
        LANG_BQ_PIEZO_BUZZER: 'Brzęczyk',
        LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE: 'Ton',
        LANG_BQ_PIEZO_BUZZER_DO: 'do',
        LANG_BQ_PIEZO_BUZZER_RE: 're',
        LANG_BQ_PIEZO_BUZZER_MI: 'mi',
        LANG_BQ_PIEZO_BUZZER_FA: 'fa',
        LANG_BQ_PIEZO_BUZZER_SOL: 'sol',
        LANG_BQ_PIEZO_BUZZER_LA: 'la',
        LANG_BQ_PIEZO_BUZZER_SI: 'si',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Czas trwania [ms]',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Brzęczyk piezoelektryczny',
        LANG_BQ_PIEZO_BUZZERAV: 'Brzęczyk zaawansowany',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'Ton',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Czas trwania [ms]',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Brzęczyk piezoelektryczny zaawansowany',
        LANG_BQ_POTENTIOMETER: 'Potencjometr',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Zwraca wartość analogową ustawioną na potencjometrze.',
        //bloki LCD:
        LANG_CATEGORY_LCD: 'Wyświetlacze LCD',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'LCD Pins',
        LANG_LCD_DEF_TOOLTIP: 'Blok definiujący wyświetlacz LCD',
        LANG_LCD_ADVANCED_DEF: 'Zaawansowany wyświetlacz LCD',
        LANG_LCD_ADVANCED_ROWS: 'Rzędy',
        LANG_LCD_ADVANCED_COLUMNS: 'Kolumny',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Blok definiujący zaawansowany wyświetlacz LCD',
        LANG_LCD_SETBACKLIGHT: 'LCD: Poziom_podświetlenia(',
        LANG_LCD_SETBACKLIGHT_CLOSE: ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'ustawia podświetlenie ekranu LCD.',
        LANG_LCD_PRINT: 'Wyświetl na LCD',
        LANG_LCD_PRINT_POSITION: 'Ustaw pozycję tekstu.',
        LANG_LCD_PRINT_TOOLTIP: 'Wyświetla ciąg znaków na wyświetlaczu LCD na określonej pozycji lub na następnej dostępnej.',
        LANG_LCD_CLEAR: 'Czyść LCD',
        LANG_LCD_CLEAR_TOOLTIP: 'Wygasza segmenty LCD',
        //bloki sterujące:
        LANG_CATEGORY_CONTROLS: 'Sterujące',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Czekaj (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Czeka przez czas określony w milisekundach (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Czas od startu',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Liczba milisekund od momentu startu programu (long integer)',
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Rób',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'dopóki',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'Powtarzaj wykonanie bloku poleceń dopóki warunek jest spełniony.',
        LANG_CONTROLS_EXECUTE: 'Wykonaj',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Wykonaj kod C/C++. Używać ostrożnie, gdyż łatwo może przerwać wykonanie programu a także spowodować że nie zostanie skompilowany.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Jeżeli warunek jest prawdą, wtedy wykonaj blok poleceń.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Jeżeli warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku wykonaj drugi blok poleceń.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Jeżeli pierwszy warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku, jeżeli druga wartość jest prawdą, wykonaj drugi blok poleceń.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Jeżeli pierwszy warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku, jeżeli druga wartość jest prawdą, wykonaj drugi blok poleceń. Jeżeli żadna z wartości nie jest prawdą, wykonaj ostatni blok poleceń.',
        LANG_CONTROLS_IF_MSG_IF: 'Jeżeli',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'albo Jeżeli',
        LANG_CONTROLS_IF_MSG_ELSE: 'albo to',
        LANG_CONTROLS_IF_MSG_THEN: 'to',
        LANG_CONTROLS_IF_IF_Field_IF: 'Jeżeli',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Dodaj, usuń lub zmień kolejność sekcji aby przeorganizować blok Jeżeli.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'albo Jeżeli',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Dodaj warunek bloku "albo Jeżeli".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'albo to',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Dodaj ostatni stan bloku Jeżeli dla pozostałych możliwości.',
        LANG_CONTROLS_FOR_FROM_WARNING:'Nie można ustawić zmiennej jako wartości początkowej dla bloku Dla.',
        LANG_CONTROLS_FOR_TO_WARNING:'Nie można ustawić zmiennej jako wartości końcowej dla bloku Dla.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'Dla',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'od',
        LANG_CONTROLS_FOR_INPUT_TO: 'do',
        LANG_CONTROLS_FOR_INPUT_DO: 'rób',
        LANG_CONTROLS_FOR_TOOLTIP: 'Odlicza od liczby początkowej do liczby końcowej. Za każdym razem, gdy licznik jest zwiększany o 1, zmienna pobiera wartość a następnie wykonuje blok poleceń.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'Dopóki',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'Aż do',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Dopóki warunek jest spełniony dopóty powtarzaj wykonanie bloku poleceń.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Dopóki warunek nie jest spełniony dopóty powtarzaj wykonanie bloku poleceń.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Powtórz',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'razy',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'rób',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Powtórz polecenia określoną liczbę razy.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'pętlę',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'przerwij',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'kontynuuj',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Przerwij pętlę i przejdź do bloku za pętlą.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Pomiń resztę pętli i kontynuuj następny przebieg.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Ostrzeżenie: Ten blok może być użyty tylko w pętli.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Ustawienia',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Pętla',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Bloki w Ustawieniach będą wykonane na początku, następnie bloki w Pętli będą powtarzane bez końca.',
        LANG_CONTROLS_SWITCH: 'Gdy',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Gdy zmienna jest równa jednej z podanych wartości, wykonuj od odpowiadającego jej bloku.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Wyrażenie Gdy jest określane jeden raz',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'równe',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'Po słowie kluczowym "domyślnie" wykonają się polecenia, jeżeli żadna z podanych wartości nie pasuje.',
        LANG_CONTROLS_SWITCH_IS: 'równe ',
        LANG_CONTROLS_SWITCH_CASE: 'równe',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'domyślnie',
        LANG_CONTROLS_SWITCH_DO: 'rób',
        //bloki matematyczne:
        LANG_CATEGORY_MATH: 'Matematyczne',
        LANG_MATH_ADVANCED_MAP_MAP: 'Skaluj ',
        LANG_MATH_ADVANCED_MAP_FROM: 'od [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'do [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Przeskaluj wartości z pewnego zakresu na inny.',
        LANG_MATH_NUMBER_TOOLTIP: 'Liczba',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Tablica',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Zwraca wartość wskazanego elementu tablicy.',
        LANG_MATH_MODULO_TOOLTIP: 'Zwraca resztę z dzielenia dwóch liczb wejściowych.',
        LANG_MATH_BASE_MAP: 'Skaluj ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Wartość na [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Przeskaluj wartości z zakresu [0-1023] na inny.',
        LANG_MATH_SINGLE_OP_ROOT: 'pierwiastek kwadratowy',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'wartość bezwzględna',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Zwraca pierwiastek kwadratowy liczby.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Zwraca wartość bezwzględną liczby.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Zwraca negację liczby.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Zwraca logarytm naturalny z liczby.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Zwraca logarytm dziesiętny z liczby.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Zwraca e do potęgi liczby.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Zwraca 10 do potęgi liczby.',
        //bloki tekstowe:
        LANG_CATEGORY_TEXT: 'Tekstowe',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Litera, słowo lub linia tekstu.',
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'Utwórz tekst z',
        LANG_TEXT_JOIN_TOOLTIP: 'Utwórz tekst poprzez połączenie dowolnej liczby elementów.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'Złącz',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Dodaj, usuń lub zmień kolejność sekcji aby przekonfigurować ten blok tekstu.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Dodaj element do tekstu.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'Złącz',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'z',
        LANG_TEXT_APPEND_APPENDTEXT: 'Dołącz tekst',
        LANG_TEXT_APPEND_VARIABLE: 'element',
        LANG_TEXT_APPEND_TOOLTIP: 'Dołącz pewien tekst do zmiennej %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'Długość',
        LANG_TEXT_LENGTH_TOOLTIP: 'Zwraca liczbę liter (włącznie ze spacjami) w podanym tekście.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Wynik sprawdzenia czy oba ciągi wejściowe są równe, niezależnie od wielkości liter.',
        LANG_TEXT_SUBSTRING: 'Przytnij ',
        LANG_TEXT_SUBSTRING_FROM: 'od',
        LANG_TEXT_SUBSTRING_TO: 'do',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Uzyskuje podciąg znaków z ciągu wejściowego z pozycji pomiędzy podanymi liczbami wejściowymi.',
        //bloki zaawansowane:
        LANG_CATEGORY_ADVANCED: 'Funkcje portów',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Konwertuj',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Dziesiętnie',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Heksadecymalnie',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Ósemkowo',
        LANG_ADVANCED_CONVERSION_BINARY: 'Dwójkowo',
        LANG_ADVANCED_CONVERSION_VALUE: 'Wartość',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Konwertuje liczbę z jednej podstawy do innej.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Odczyt analogowy PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Czyta wartość z określonego wejścia analogowego',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Zapis analogowy PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'wartość',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Wpisuje wartość z zakresu 0..255 do określonego wyjścia analogowego',
        LANG_ADVANCED_BUILTIN_LED: 'LED wbudowany',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'stan',
        LANG_ADVANCED_BUILTIN_LED_ON: 'włączony',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'wyłączony',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED wbudowany, który jest wewnętrznie podpięty do PIN 13',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Odczyt cyfrowy PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Czyta wartość z określonego wejścia cyfrowego',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Zapis cyfrowy PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'wartość',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'Stan',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'WYSOKI',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'NISKI',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'wpisuje wartość do określonego wyjścia cyfrowego',
        LANG_ADVANCED_HIGHLOW_HIGH: 'WYSOKI',
        LANG_ADVANCED_HIGHLOW_LOW: 'NISKI',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'stan WYSOKI lub NISKI',
        LANG_ADVANCED_MATH_RANDOM: 'Losuj z zakresu',
        LANG_ADVANCED_MATH_RANDOM_AND: ' i ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Zwraca liczbę losową z zakresu podanych dwóch liczb ograniczających.',
        //bloki procedur:
        LANG_CATEGORY_PROCEDURES: 'Funkcje',
        LANG_PROCEDURES_RETURN: 'Zwróć',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Zwraca wartość',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Wywołanie funkcji bez dopasowanej definicji',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'Procedura',
        LANG_PROCEDURES_DEFNORETURN_DO: 'rób',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Procedura - nie zwraca wartości.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'Funkcja',
        LANG_PROCEDURES_DEFRETURN_DO: 'rób',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'zwróć',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funkcja - zwraca wartość.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Ostrzeżenie: Ta funkcja ma powielone parametry.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'Wywołaj',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Procedura',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Wywołuje blok procedury.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'Wywołaj',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'Funkcja',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Wywołuje blok funkcji i zwraca jej wynik.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametry',
        LANG_PROCEDURES_MUTATORARG_Field: 'zmienna:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Funkcja Highlight',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Jeżeli warunek jest prawdą, zwraca tę wartość.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Ostrzeżenie: Ten blok może być użyty wyłącznie w funkcji.',
        //bloki zmiennych:
        LANG_CATEGORY_VARIABLES: 'Zmienne',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Ta zmienna nie jest zadeklarowana.',
        LANG_VARIABLES_GLOBAL: 'Deklaracja zmiennej globalnej ',
        LANG_VARIABLES_GLOBAL_TYPE: 'typu ',
        LANG_VARIABLES_GLOBAL_EQUALS: 'równej',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Deklaruje i definiuje zmienną globalną typu Int lub String.',
        LANG_VARIABLES_LOCAL: 'Deklaracja zmiennej ',
        LANG_VARIABLES_LOCAL_TYPE: 'typu ',
        LANG_VARIABLES_LOCAL_EQUALS: 'równej',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Deklaruje i definiuje zmienną lokalną typu Int lub String.',
        LANG_VARIABLES_DEFINE: 'definiuj zmienną ',
        LANG_VARIABLES_DEFINE_AS: 'jako',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definiuje typ zmiennej.',
        LANG_VARIABLES_SET: 'Zmienna',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Ustawia wartość zmiennej.',
        LANG_VARIABLES_GET: 'Zmienna',
        LANG_VARIABLES_GET_TOOLTIP: 'Zwraca wartość zmiennej.',
        LANG_VARIABLES_PIN_ANALOG: 'pin analogowy',
        LANG_VARIABLES_PIN_DIGITAL: 'pin cyfrowy',
        LANG_VARIABLES_PIN_DIGITAL0: 'Ostrzeżenie: pin cyfrowy 0 (RX pin) jst używany podczas ładowania programu (sketchu). Jego użycie do podłączania komponenetów elektronicznych może powodować problemy podczas ładowania nowego programu.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Wybierz PIN.',
        LANG_VARIABLES_TYPE_BYTE: 'Bajt',
        LANG_VARIABLES_TYPE_FLOAT: 'Liczba zmiennoprzecinkowa',
        LANG_VARIABLES_TYPE_INTEGER: 'Liczba całkowita',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Długa liczba całkowita',
        LANG_VARIABLES_TYPE_STRING: 'Ciąg znaków',
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',  // To translate
        //bloki Zum:
        LANG_CATEGORY_ZUM: 'Bloki Zum',
        LANG_ZUM_BUTTON: 'Przycisk',
        LANG_ZUM_BUTTON_PIN: 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Przycisk Zum',
        LANG_ZUM_FOLLOWER: 'Czujnik podczerwieni',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN LEFT#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN RIGHT#',
        LANG_ZUM_FOLLOWER_LEFT: 'Lewy',
        LANG_ZUM_FOLLOWER_RIGHT: 'Prawy',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Zwraca wartość cyfrową odczytaną przez czujnik podczerwieni Zum',
        LANG_ZUM_INFRARED: 'Czujnik podczerwieni',
        LANG_ZUM_INFRARED_PIN: 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Zwraca wartość cyfrową odczytaną przez czujnik podczerwieni Zum',
        LANG_ZUM_LED: 'Dioda LED',
        LANG_ZUM_LED_PIN: 'PIN#',
        LANG_ZUM_LED_ON: 'włączona',
        LANG_ZUM_LED_OFF: 'wyłączona',
        LANG_ZUM_LED_TOOLTIP: 'Dioda LED Zum',
        LANG_ZUM_PHOTORESISTOR: 'Czujnik światła',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Zwraca wartość analogową zmierzoną przez czujnik światła Zum.',
        LANG_ZUM_PIEZO_BUZZER: 'Brzęczyk',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'Ton',
        LANG_ZUM_PIEZO_BUZZER_DO: 'do',
        LANG_ZUM_PIEZO_BUZZER_RE: 're',
        LANG_ZUM_PIEZO_BUZZER_MI: 'mi',
        LANG_ZUM_PIEZO_BUZZER_FA: 'fa',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'sol',
        LANG_ZUM_PIEZO_BUZZER_LA: 'la',
        LANG_ZUM_PIEZO_BUZZER_SI: 'si',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Czas trwania [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Brzęczyk piezoelektryczny Zum',
        LANG_ZUM_PIEZO_BUZZERAV: 'Brzęczyk zaawansowany',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'Ton',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Czas trwania [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Brzęczyk piezoelektryczny Zum zaawansowany',
        LANG_ZUM_POTENTIOMETER: 'Potencjometr',
        LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Zwraca wartość analogową ustawioną na potencjometrze Zum.',
        //bloki serwomechanizmów:
        LANG_CATEGORY_SERVO: 'Serwomechanizmy',
        LANG_SERVO_CONT: 'Serwo obrotu ciągłego',
        LANG_SERVO_CONT_PIN: 'PIN#',
        LANG_SERVO_CONT_ROT: 'Rotacja',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'Obrót zgodnie ze wskazówkami zegara',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'Obrót przeciwnie do wskazówek zegara',
        LANG_SERVO_CONT_STOPPED: 'Zatrzymany',
        LANG_SERVO_CONT_DELAY: 'Opóźnienie [ms]',
        LANG_SERVO_CONT_TOOLTIP: 'Serwomechanizm obrotu ciągłego.',
        LANG_SERVO_MOVE: 'Serwo obrotu kątowego',
        LANG_SERVO_MOVE_PIN: 'PIN#',
        LANG_SERVO_MOVE_DEGREES: 'Stopnie (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Opóźnienie [ms]',
        LANG_SERVO_MOVE_TOOLTIP: 'Serwomechanizm obrotu w zakresie 0~180 stopni.',
        LANG_SERVO_WARNING:'Ustawianie pinu serwomechanizmu przy użyciu zmiennej nie jest możliwe.',
        //interrupt blocks :
        LANG_CATEGORY_INTERRUPTS: 'Interrupts',  // To translate
        LANG_INTERRUPTS_STATE: 'Set interrupts state to ',  // To translate
        LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED',  // To translate
        LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED',  // To translate
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.',  // To translate
        LANG_INTERRUPTS_ATTACH: 'Attach procedure ',  // To translate
        LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ',  // To translate
        LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin',  // To translate
        LANG_INTERRUPTS_ATTACH_LOW: 'LOW',  // To translate
        LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE',  // To translate
        LANG_INTERRUPTS_ATTACH_RISING: 'RISING',  // To translate
        LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING',  // To translate
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return',  // To translate
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.',  // To translate
        LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin',  // To translate
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.'  // To translate
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('es', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('pl-PL', language);
    }
}());
