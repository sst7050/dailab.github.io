## DAILAB 홈페이지 입니다.

### [dailab.github.io](https://bytecell.github.io/dailab.github.io/)

# 1. html 파일 소개
* index: 인사, 소개, 관심 연구 분야, 과제 목록

* member

    * professor: 교수님 소개
    * student: Ph.D., M.S., Intern 소개
    * Alumni: DAI Lab 졸업자 소개

* publication: 논문, 수상, 특허, ACK 목록

    * present: 2021.09.01 ~ present
    * past: 2017.01.01 ~ 2021.08.31

* news: DAI Lab 이슈 목록 - 워크숍, 학술대회 참석, 수상 등

* contact: 랩장 이메일, 연구실 주소


# 2. nav 바 수정 

## 2.1. 기본 메뉴 추가하는 과정

* 주 메뉴 추가하는 과정 (예: News 옆에 하나 추가하기)
  ---
  메뉴 코드는 전체 html 파일에 각각 추가해야 한다. publication과 people 폴더의 경로를 적을 때는 주의한다.
  * 기본 nav 바에 추가 (예: plus.html)
    * plus.html을 만든다.

    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ``` html
       <li class="dropdown"><a href="./plus.html" data-target="plus">Plus</a></li>
       ```
    * 결과
       
       <img src="https://github.com/user-attachments/assets/f3be63d5-7343-4e7d-a297-b46d75c54c53" width=1000px;>
       <img src="https://github.com/user-attachments/assets/0f299284-1595-47cc-8621-4ab1077d4d81" width=1000px;>
       
    * 주의: 메뉴가 늘어났으므로 화면을 가로로 줄였을 때 nav바가 깨질 수 있다. 그럼 css - nav 클래스의 margin-right를 아래 주석과 같이 적절하게 조정하면 된다.
      
       <img src ="https://github.com/user-attachments/assets/f46a38f7-5087-405a-87c3-6df2443d694d" width=500px>


       ``` css
       .nav {
           margin-right: 15vw; /*  15vw -> 10vw */
       }
       ```

    * 수정 결과
      
       <img src="https://github.com/user-attachments/assets/03adc951-a148-491f-9648-b45a0cf60c1e" width= 500px>
    
  
---
  
  * media nav 바에 추가 (예: plus.html)
     * plus.html을 만든다.
       
     * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li><a href="./plus.html" data-target="plus">Plus</a></li>
       ```
     * 결과
     
      <img src ="https://github.com/user-attachments/assets/97819168-115d-4b17-a1a6-ecd13aeae2b0" width=400px>
      <img src ="https://github.com/user-attachments/assets/8b972a82-066e-4369-94f0-56371e17ef48" width=400px>





---

## 2.2. 드롭다운 메뉴 추가하는 과정

* 주 메뉴 추가하는 과정
  
  * 기본 nav 바에 추가
    * one.html, two.html을 만든다. - 드롭다운 메뉴들
      
    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li class="dropdown">
          <a href="#">Plus <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">  <!-- 드롭다운 메뉴들 이름이 길면 content1, 짧으면 content 사용 -->
              <a class="dropdown-item" href="./one.html" data-target="one">one</a>
              <a class="dropdown-item" href="./two.html" data-target="two">two</a>
          </div>
       </li>
       ```
       
    * 결과
   
      <img src ="https://github.com/user-attachments/assets/80c6a172-c2bb-4a01-8044-68ac508350eb" width=500px>
      <img src ="https://github.com/user-attachments/assets/32021d5d-416f-4aee-988f-0597ced613ce" width=500px>

    * 주의: 메뉴가 늘어났으므로 화면을 가로로 줄였을 때 nav바가 깨질 수 있다. 그럼 css - nav 클래스의 margin-right를 아래 주석과 같이 적절하게 조정하면 된다.
      
       <img src ="https://github.com/user-attachments/assets/f46a38f7-5087-405a-87c3-6df2443d694d" width=500px>


       ``` css
       .nav {
           margin-right: 15vw; /*  15vw -> 10vw */
       }
       ```

    * 수정 결과
      
       <img src="https://github.com/user-attachments/assets/03adc951-a148-491f-9648-b45a0cf60c1e" width= 500px>

---

* 부 메뉴 추가하는 과정 (예: Publication 아래에 새로운 '기간'에 해당되는 항목을 추가하기)
  * media nav 바에 추가


* 메뉴 수정 또는 삭제하는 과정
  * 기존의 주/부메뉴의 제목을 수정하거나 삭제하는 과정

.
.
.
.
.

* 문서 내용 수정하는 과정
  * 글 내용 수정 (예: Publication - 2021.09.01 ~ present 에서 논문 실적 1개 추가하기)
  * 사진 추가 혹은 변경
    * 대문 웹페이지 사진 변경하기
    * 새로운 member 에 대한 사진을 넣기
    * News 에서 새로운 소식에 대한 사진을 넣기
