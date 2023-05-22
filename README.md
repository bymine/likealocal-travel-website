# 원티드 프리온보딩 6팀 2주차 과제

## 📝 과제 소개 및 목적

> TravelTech 스타트업 '라이크어로컬'의 기업과제로 여행 상품 목록과 장바구니를 구현하며 모범사례 도출과 동료학습을 목적으로 했습니다.

<br/>
<br/>

## 🎥 작동 화면

- 여행상품 필터링 화면

![라이크어로컬 상품 필터링](https://github.com/bymine/travel-website/assets/71866185/69695761-3db5-4e75-bfee-c61802e1988f)

<br/>
<br/>

- 여행상품 장바구니 화면

![라이크어로컬 장바구니](https://github.com/bymine/travel-website/assets/71866185/a52e3ef3-6c5d-4462-b139-f99b6eb769bd)

<br/>
<br/>

## 🕹️ **프로젝트 실행 방법**

```
git clone https://github.com/bymine/travel-website.git
cd travel-website
npm install
npm start
```

<br/>
<br/>

## 🔗 배포 링크

[https://wanted-pre-onboarding-frontend-2.vercel.app/](https://wanted-pre-onboarding-frontend-2.vercel.app/)

<br/>
<br/>

# 🛠️ 기술 스택

<p>

![CRA](https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=React)
![ReduxToolkit](https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=fff)
![React-router](https://img.shields.io/badge/REACT--ROUTER--DOM-343a40?style=for-the-badge&logo=ReactRouter&logoColor=CA4245)
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
![Chakra-UI](https://img.shields.io/badge/Chakra-UI-319795?style=for-the-badge&logo=Chakra-UI)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=fff)

</p>

<br/>
<br/>

## 📂 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📜Error.jsx
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜Loading.jsx
 ┃ ┣ 📜NavBar.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜ReceiptBox.jsx
 ┃ ┣ 📜ReservationCard.jsx
 ┃ ┣ 📜ReservationList.jsx
 ┃ ┣ 📜TravelCard.jsx
 ┃ ┣ 📜TravelFilterBox.jsx
 ┃ ┣ 📜TravelList.jsx
 ┃ ┗ 📜TravelModal.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┗ 📜useProducts.jsx
 ┣ 📂pages
 ┃ ┣ 📜index.js
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜ReservationPage.jsx
 ┣ 📂redux
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜reservationSlice.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┗ 📜index.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜Rourter.jsx
```

<br/>
<br/>

## 🚀 요구사항

- `/main` 페이지

  - [x] 사용자의 방문시 `/`으로부터 리다이렉트
  - [x] 여행 상품 목록 출력
  - [x] 예약 버튼 클릭시 장바구니에 상품 데이터 저장
  - [x] 여행 상품 정보 클릭 시 모달창으로 상세 정보 표시
  - [x] 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터링

    - [x] 개별 필터링, 다중 필터링
    - [x] 예시) [0 ~ 3000] 또는 [서울, 부산] 또는 [0 ~ 3000] && [서울, 부산]
          <br/>

- `/reservations` 페이지
  - [x] 예약한 여행 상품 목록 출력
  - [x] 예약한 상품 삭제
  - [x] 여행 상품의 구매 수량 변경 가능
  - [x] 장바구니 여행 상품의 총 결제액수 계산 및 표시

<br/>
<br/>

## 🥇 기술적 구현 사항

### React-Router-Dom의 useSearchParams를 활용하여 상품 필터링 기능 구현

- 장소와 가격을통해 상품을 필터링 할 수 있도록 구현하였습니다.
- 상품 리스트 페이지는 현재 URL의 쿼리 매개변수를 읽어와 해당하는 상품들을 필터링하여 보여줍니다.
  <br/>

### Chakra-ui를 활용하여 여행 상품 사이트 UI 구성

- 상품 리스트 페이지와 장바구니 페이지는 각각 Chakra-UI의 `Grid`, `Table Container` 컴포넌트를 활용하였습니다.
- 필터링 영역은 `Checkbox`, `RangeSlider` 컴포넌트를 활용하였습니다.

<br/>

### Redux-toolkit을 활용하여 장바구니 기능 구현

- Redux-toolkit을 사용하여 장바구니 기능을 구현하였습니다. Redux-toolkit은 Redux를 보다 쉽게 사용할 수 있도록 도와주는 라이브러리입니다.
- 전역 상태 관리를 위해 Redux를 사용했습니다.
