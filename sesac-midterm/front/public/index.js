/* 1. https://jsonplaceholder.typicode.com/todos 로부터 데이터를 불러와서 추가해주는 함수 getTodos() 선언 */
// getTodos()는 추후에 HTML DOM 내용이 완전히 로드되었을 때 실행되어야 합니다.
async function getTodos() {
  try {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => {
        console.log(Response.data);
      });
  } catch (error) {
    console.log("error!!!");
  }
  window.addEventListener("DOMContentLoaded", () => {
    console.log("success");
  });
}
return (
  <div class="container">
    <div class="getTodos">
      <input type="checkbox" />
      {data && <textarea value={JSON.stringify(data)} readOnly={true} />}
      <button type="button">X</button>
    </div>
  </div>
);

/* 
  2. 새로운 입력창의 Todo를 Todo 목록에 추가하고, 입력창을 초기화합니다.
  - 공백이나 빈 문자열의 경우 추가될 수 없습니다.
  - 작성 버튼 클릭 시 addTodo() 함수가 실행됩니다.
  - 입력 창에서 Enter 키 입력시에도 addTodo() 함수가 실행됩니다.
*/
let getTodos = [];
let inputButton = document.querySelector(".input_btn");
inputButton.addEventListener("click", addTodo);
function addTodo() {
  let todo = document.querySelector(".todo").value;
  if (item != null) {
    addTodo.push(todo);
    document.querySelector(".todo").value = "";
    document.querySelector(".todo").focus();
  }
  showTodo();
}

/*  3. x 버튼을 클릭하면 클릭한 버튼을 갖는 Todo 항목이 삭제됩니다. */
// 삭제 함수의 이름 및 모양 변경 가능
function deleteTodo(button) {
  let id = this.getAttribute("id");
  getTodos.splice(id, 1);
  showTodo();
}

/* 
 4. Todo 목록 불러오기,  
 - GET https://jsonplaceholder.typicode.com/todos 요청의 응답 결과에서 맨 처음부터 10개의 원소만 잘라내어 
   투두 목록에 초기 Todo를 표시해야 합니다.
 - HTML 문서의 DOM 내용이 완전히 로드되었을 때 실행됩니다.
 - 따로 함수를 만들어도 좋고, 함수를 만들지 않아도 좋습니다.
*/
async function getTodos(res, req) {
  try {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => {
        console.log(Response.data);
      });
  } catch (error) {
    console.log("error!!!");
  }
}
return (
  <div class="container">
    <div class="getTodos">
      <input type="checkbox" />
      {data && <textarea value={JSON.stringify(data)} readOnly={true} />}
      <button type="button">X</button>
    </div>
  </div>
);

function getCheckboxValue(event) {
  let result = "";
  if (event.target.checked) {
    result = event.target.value;
  } else {
    result = "";
  }
  document.getElementById("result").innerText = result;
}
