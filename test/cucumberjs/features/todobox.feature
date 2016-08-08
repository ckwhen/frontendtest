Feature: todo list
  In order to 紀錄待辦事項
  As a 使用者
  I want to 使用 todo list

  Scenario: 儲存待辦事項
    Given 進入待辦事項
    When 我輸入"dinner with friends."
    And 按下enter
    Then 待辦事項會增加一筆
    And 輸入欄位會被清空