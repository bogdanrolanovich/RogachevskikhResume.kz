<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Обработка данных из формы
  $name = $_POST["name"];
  $email = $_POST["email"];
  $messageContent = $_POST["message"]; // Новое поле сообщения

  // Дополнительная обработка данных, если необходимо

  // Сохранение данных в текстовый файл
  $filePath = "C:\\Users\\Bogdan\\Desktop\\inf.txt"; // Уточните путь к вашему файлу
  $data = "Имя: $name\nEmail: $email\nСообщение: $messageContent\n\n";
  $file = fopen($filePath, "a"); // "a" - режим добавления данных в файл
  fwrite($file, $data);
  fclose($file);

  // Дополнительно, вы можете добавить код для перенаправления пользователя после отправки формы
  header("Location: index.html");
  exit();
}
?>
