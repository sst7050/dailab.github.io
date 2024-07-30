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

메뉴 코드는 전체 html 파일에 각각 추가해야 한다. publication과 people 폴더의 경로를 적을 때는 주의한다.
로컬에서는 '/index.html'을 불러오면 해당 폴더(home)의 index 파일이 잘 실행되지만, github.io 창에서는 경로가 'https://bytecell.github.io/index.html'로 되기 때문에 실행이 안된다.
index.html 파일은 bytecell.github.io에 있는 것이 아니라 'bytecell.github.io/dailab.github.io'에 있기 때문이다. 따라서 경로 앞에 '/' 절대 경로가 아닌 './' 현재폴더 경로를 적어주어야 한다. 같은 이유로 '../', '../../'로 써야 한다.

## 2.1. 기본 메뉴 추가하는 과정


<details>
  <summary>펼치기</summary>  


* 주 메뉴 추가하는 과정 (예: News 옆에 하나 추가하기)  
  
  
  ---
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

</details>



## 2.2. 드롭다운 메뉴 추가하는 과정

<details>
  <summary>펼치기</summary>  


* 주 메뉴와 부 메뉴 추가하는 과정
  
  ---
  * 기본 nav 바에 추가
    * one.html, two.html을 만든다. - 드롭다운 메뉴들
      
    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li class="dropdown">
          <a href="#">Plus <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">  <!-- 드롭다운 메뉴들 이름이 길면 content1, 짧으면 content 사용 -->
               <!-- 아래 부 메뉴들 나열 - 추가하고 싶을 때는 그냥 쭉 나열하기 -->
              <a class="dropdown-item" href="./one.html" data-target="one">one</a>
              <a class="dropdown-item" href="./two.html" data-target="two">two</a>
          </div>
       </li>
       ```
       
    * 결과
   
      <img src ="https://github.com/user-attachments/assets/80c6a172-c2bb-4a01-8044-68ac508350eb" width=500px>
      <img src ="https://github.com/user-attachments/assets/40def3e6-6e83-44cf-a426-851633811cf3" width=600px>


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
    * one.html, two.html을 만든다. - 드롭다운 메뉴들
      
    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li class="dropdown">
          <a href="#">Plus <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">  <!-- 드롭다운 메뉴들 이름이 길면 content1, 짧으면 content 사용 -->
               <!-- 아래 부 메뉴들 나열 - 추가하고 싶을 때는 그냥 쭉 나열하기 -->
              <a class="dropdown-item" href="./one.html" data-target="one">one</a>
              <a class="dropdown-item" href="./two.html" data-target="two">two</a>
          </div>
       </li>
       ```
       
    * 결과
      
      <img src="https://github.com/user-attachments/assets/c0ad1c8b-d024-4dab-bccb-09ff78f81103" width= 400px>
      <img src="https://github.com/user-attachments/assets/21f5ddea-b5fb-4de4-81ff-7a5764985632" width= 400px>

</details>

## 2.3. 메뉴 수정 또는 삭제하는 과정

<details>
  <summary>펼치기</summary>  

* 기존의 주/부메뉴의 제목을 수정하거나 삭제하는 과정

  * 수정  

    * News 대신 Hot Issue로 바꾸고 싶을 때는 아래 코드처럼 </a> 앞 문구를 바꾸면 된다.
        ``` html
        <li class="dropdown"><a href="./news.html" data-target="news">News</a></li>
        <li class="dropdown"><a href="./news.html" data-target="news">Hot Issue</a></li>
        ```

    * 결과
  
      <img src="https://github.com/user-attachments/assets/2093045f-7a2d-41ea-aef7-e32911ce2a00" width= 600px>

    ---
    
  * 삭제  

    * 위 사진에서 Hot Issue를 삭제하려면 아래 코드처럼 수정하면 된다.
        ``` html
        <li class="dropdown"><a href="./news.html" data-target="news">News</a></li>
        ```

    * 결과
  
      <img src="https://github.com/user-attachments/assets/18a3794a-d6f1-4989-beda-0f9d4ef0b187" width= 600px>

</details>

## 2.4. Footer 메뉴 추가하는 방법

<details>
  <summary>펼치기</summary>  

* plus.html 만들기
* footer class에 코드 추가
  
  경로 설정에 주의
  ``` css
  <a href="./plus.html" class="menu-item">Plus</a>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/7d69c13b-d292-41a8-afe3-2b7a02b3fbed" width= 600px>


</details>



# 3. 문서 내용 수정하는 과정 

## 3.1. Student 멤버 추가

<details>
  <summary>펼치기</summary>  

* /assets/member/miso.jpg 저장하기
* member-imgs class에 코드 추가
    
  경로 설정에 주의
  ``` html
  <div class="img">
                        <img src="../assets/member/miso.jpg" alt="dlcodns">
                        <p>dlcodns</p>
                        <p class="sub-text">Undergraduate researcher (2024. 8~)<br><br>Language models<br>Web Programming</p>
                    </div>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/7d69c13b-d292-41a8-afe3-2b7a02b3fbed" width= 600px>


</details>


## 3.2. Alumni 멤버 추가


## 3.3. Publication 논문 추가


## 3.4. News 소식 추가





* 문서 내용 수정하는 과정
  * 글 내용 수정 (예: Publication - 2021.09.01 ~ present 에서 논문 실적 1개 추가하기)
  * 사진 추가 혹은 변경
    * 대문 웹페이지 사진 변경하기
    * 새로운 member 에 대한 사진을 넣기
    * News 에서 새로운 소식에 대한 사진을 넣기
