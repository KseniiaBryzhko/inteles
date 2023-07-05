<?php
  $content = '';
  foreach ($_POST as $key => $value) {
    if($value){
      $content .= "<b>$key<b>: <i>$value</i>\n";
    }
  }
  if(trim($content)){
    $content = "<b>Message from site:<b>\n".$content;
    $apiToken = "6127192036:AAEaGRIcTK3V0Dtue_4G5SAX6VdIaPPFctI";
    $data = [
      'chat_id' => '@IntelesMessageBot',
      'text' => $content,
      'parse_mode' => 'HTML'
    ];
    $response = file_get_contents("http://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
  }
?>
