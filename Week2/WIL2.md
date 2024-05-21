# Weekly I learned - 2

## 0. 스터디에서 배운 것 + 추가 조사

> 💡과제는 이 챕터 다음에 있습니다!

### 0.1. HTML

- HTML (Hyper Text Markup Language) 는 웹 페이지의 구조를 계층적으로 나타낼 수 있게 해주는 마크업 언어 (Markup Language)

- 왜 프로그래밍 언어가 아닌가?
  - 프로그래밍 언어는 조건문, 변수, 반복 루프가 있어야 함.

### 0.2. CSS

- CSS (Cascading Style Sheets) 는 웹 페이지의 스타일을 구성할 수 있게 해주는 스타일 시트 언어 (Style Sheet Language)

### 0.3. 브라우저 동작 원리

- 구글 검색을 한다면?
  1. 사용자가 검색어를 입력
  2. 브라우저가 구글 서버로 요청을 보냄
     1. 브라우저가 검색어를 포함해 URL을 만듦
     2. 브라우저는 DNS를 이용해 도메인을 IP 주소로 바꿈
     3. 알아낸 IP로 HTTP 요청을 구글 서버로 보냄
  3. 구글 서버에서 요청에 대한 응답을 보냄
     - 응답 성공 여부가 표시됨(200, 400, 500 등)
     - 응답 헤더에는 날짜, 서버, 내용 길이, 내용 유형 등의 정보가 포함됨
     - 응답 바디에는 HTML등이 포함됨
  4. 받은 내용을 브라우저에서 렌더링

> 🛜 이때 실제 요청을 브라우저 검사 (F12) 에서 볼 수 있다! (네트워크 탭)

### 0.4. 렌더링

![브라우저 구조](src/browser-structure.png)

#### 0.4.0. 브라우저 구조

- UI (User Interface)
  - **주소 바, 홈, Undo, Redo 버튼** 처럼 사용자가 직접 상호작용 할 수 있는 것
- 브라우저 엔진 (Browser Engine)

  - UI에서 받은 입력을 렌더링 엔진으로 연결해주는 역할
  - 이것의 성능이 브라우저 성능을 크게 좌우함

- 렌더링 엔진 (Rendering Engine)

  - 요청받은 웹 페이지를 렌더링함
  - HTML과 XML, CSS를 해석
  - 웹 브라우저마다 다양한 엔진이 있음
    - Chrome: Blink
    - IE: Trident
    - Edge: EdgeHTML
    - Firefox: Gecko
    - Chrome for iOS, Safari: Webkit

- 네트워킹 (Networking)

  - HTTP나 FTP 등의 프로토콜을 이용해 네트워크를 관리
  - 인터넷 연결과 관련된 보안 문제를 관리

- 자바스크립트 인터프리터 (JavaScript Interpreter)

  - 자바스크립트 코드를 파싱하고 실행함
  - 웹 브라우저마다 다양한 스크립팅 엔진이 있음 - Chrome: V8 - IE: Chakra(Jscript 엔진) - Edge: Chakra(JavaScript 엔진) - Firefox: Spider Monkey - Safari: Nitro
    > ❓**Jscript**는 *마이크로소프트*가 1996년에 *썬 마이크로시스템즈*와의 상표 문제를 피하기 위해 만든 Javascript와 매우매우매우 유사한 언어이다.

- UI 백엔드 (UI Backend)

  - 선택 창, 입력 창, 체크박스 등을 만드는 데 쓰인다. ~~근데 왜 백엔드에서 해야하지? 아직 이해가 잘 안돼요~~

- 데이터 지속성
  - 쿠키, 로컬 스토리지, 세션 스토리지, IndexedDB, WebSQL, FileSystem 등에 브라우저가 데이터를 로컬로 저장할 수 있게 해준다.

#### 0.4.1. 렌더링 엔진에 대해 자세히 알아보기

- 렌더링 엔진이 파일들을 해석해 렌더링하기 까지의 일을 나타낸 것을 **중요 렌더링 경로 (Critical Rendering Path)** 라고 한다.

  1. 파싱

     - HTML 파싱: DOM 트리 (content 트리) 생성
     - CSS 파싱: CSSOM 트리 생성

  2. 렌더 트리 구축

     - DOM과 CSSOM을 병합하여 렌더 트리 구축
     - 요소들이 표시되는 순서가 정해짐

  3. 레이아웃 과정

     - 렌더 트리가 만들어질 때 요소의 크기와 위치 값은 계산되지 않는데, 레이아웃 과정에서 각 요소의 좌표가 계산됨.

  4. 페인트
     - 렌더링 엔진의 paint() 메서드가 실행되며 계산된 좌표를 바탕으로 요소들에 스타일을 입히고 화면에 출력

- 중요 렌더링 경로를 최적화하면 렌더링 성능을 향상시킬 수 있다.

참고:  
[1]https://medium.com/@ramsunvtech/behind-browser-basics-part-1-b733e9f3c0e6  
[2]https://www.browserstack.com/guide/browser-rendering-engine

## 1. 과제

### 1.0. 아래 질문에 대한 답을 찾기 위해 학습하고, WIL을 작성하세요.

    a. JavaScript가 DOM에 어떻게 접근하고 적용될까?

<br>

- 자바스크립트 언어 자체는 DOM을 포함하지 않는다. 그러나 브라우저에서 자바스크립트가 실행될 때, WEB API를 이용함으로써 DOM에 대한 접근이 가능하다.

- 심지어 파이썬에서도 WEB API를 이용하면, DOM에 접근할 수 있다.

```javascript
const domElement = document.querySelector("요소 선택자");
```

- 자바스크립트에서는 이런식으로 `document`라는 단어를 작성하면 API에 접근하는 것이 된다. 또한 `document`는 `Document` 클래스의 객체인데, `Document`의 `querySelector()` 메서드를 통해 DOM의 요소를 참조할 수 있다.

참고:  
[1]https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes
[2]https://developer.mozilla.org/en-US/docs/Web/API/Document

<br>

    b. 브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?

- 자바스크립트 엔진은 자바스크립트 코드를 실행하는 프로그램이다. 자바스크립트를 기계어로 변환하는 역할을 한다.

1. 파싱 (Parsing)

   - 엔진은 자바스크립트 코드를 AST (Abstract Syntax Tree) 라는 자료 구조로 파싱한다. 이 과정에서 구문 오류를 확인한다.

2. 컴파일 (Compilation)

   - 엔진은 AST를 기계어로 컴파일한다.

3. 실행 (Excution)

   - 기계어를 실행한다.

4. 최적화 (Optimization)

   - 엔진은 코드를 최적화 시켜주기도 한다.

참고:  
https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/

<br>

    c. inline CSS가 항상 좋은 것일까? 아니라면 그 이유는 무엇일까?

- inline CSS만 사용한다면 웹 페이지가 조금만 커져도 관리가 불편해진다. 외부 CSS를 이용해 선택자 하나만 설정해주면 복수의 요소의 스타일을 설정할 수 있는데 inline은 그렇지 못한다.

### 1.1. GDSC Hongik!을 띄운 웹 페이지에 JavaScript 작성하여 간단한 기능 만들기

- 링크: [[추가할 예정]]

## 2. 과제하면서 배운 것

### 2.1. Emmet Abbreviation

> 🤯 와 이걸 왜 지금 발견했지 신세계다

- Emmet은 HTML과 CSS를 사용할 때 생산성을 많이 올려줄 수 있는 도구다.
- VScode에 기본적으로 설치되어 있다.

```
h1{GDSC Hongik!}+div.container#gallery>nav#img$*10>img[alt=image$ src="image$.jpg"]
```

- VScode에서 HTML 파일을 열고 이 괴랄해 보이는 코드를 적으면 다음 코드가 나오게 된다.

```html
<h1>GDSC Hongik!</h1>
<div class="container" id="gallery">
  <nav id="img1"><img src="image1.jpg" alt="image1" /></nav>
  <nav id="img2"><img src="image2.jpg" alt="image2" /></nav>
  <nav id="img3"><img src="image3.jpg" alt="image3" /></nav>
  <nav id="img4"><img src="image4.jpg" alt="image4" /></nav>
  <nav id="img5"><img src="image5.jpg" alt="image5" /></nav>
  <nav id="img6"><img src="image6.jpg" alt="image6" /></nav>
  <nav id="img7"><img src="image7.jpg" alt="image7" /></nav>
  <nav id="img8"><img src="image8.jpg" alt="image8" /></nav>
  <nav id="img9"><img src="image9.jpg" alt="image9" /></nav>
  <nav id="img10"><img src="image10.jpg" alt="image10" /></nav>
</div>
```

<img alt="Mind Blown!" src="imgs/mind-blown.gif" width="200px">

> MIND BLOWN

- 사용법도 매우 직관적이다.
  - 태그 이름을 적으면 태그가 생성된다.
  ```html
  //div
  <div></div>
  ```
  - 태그 뒤 `.`과 `#`으로 클래스와 아이디를 지정할 수 있다.
  ```html
  //div.myClass#myId
  <div class="myClass" id="myId></div>
  ```
  - 태그 안에 다른 태그를 넣고 싶다면 뒤에 `>`를 넣는다.
  ```html
  //div>ul>li
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
  ```
  - 태그를 반복하고 싶다면 `*숫자`를 입력한다.
  ```html
  //div>ul*2>li*3
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  ```
  - `*숫자`로 만든 태그마다 123456...으로 정렬하고 싶다면 `$`로, 태그 내에 텍스트를 쓰고 싶다면 `{}` 입력 후 그 안에 적는다.
  ```html
  //span{$}*5 <span>1</span><span>2</span><span>3</span><span>4</span
  ><span>5</span>
  ```
  - 태그를 병렬로 적고 싶다면 `+`를 적고 다른 속성을 설정하고 싶다면`[]` 안에 쓴다.
  ```html
  //h1{GDSC Hongik!}+input[type=text placeholder=Input\ Your\ Email]
  <input type="text" placeholder="Input Your Email" />
  ```
