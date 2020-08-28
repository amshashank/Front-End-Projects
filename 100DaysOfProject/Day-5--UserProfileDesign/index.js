@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');

* {
	box-sizing: border-box;
}

:root {
	--light-col: #D9C4B1;
	--dark-col: #B59B80;
	--second-col: #b76eb8;
}

body {
	background-color: #D9C4B1;
  	background-image: radial-gradient(circle, var(--light-col), var(--dark-col));
	font-family: 'Roboto';
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.user-profile-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.user-profile {
	background-image: url('https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_400x400.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 5px;
	box-shadow: 0 15px 55px rgba(0, 0, 0, 0.5);
	color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 300px;
	height: 300px;
	z-index: 3;
}

.user-profile h3 {
	margin: 0;
	letter-spacing: 5px;
	text-transform: uppercase;
}

.user-profile p {
	font-weight: 300;
	letter-spacing: 1px;
	margin: 5px 0 10px;
}

.user-info {
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 5px 55px rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-around;
	list-style-type: none;
	padding: 30px 0 15px;
	margin-top: -15px;
	width: 80%;
	text-align: center;
	z-index: 2;
}

.user-info h3 {
	margin: 0;
}

.user-info small {
	color: #bbb;
	font-weight: 100;
	font-size: 12px;
	margin: 0;
}

.follow-btn {
	background-color: var(--second-col);
	border-radius: 5px;
	box-shadow: 0 5px 55px rgba(0, 0, 0, 0.5);
	color: #fff;
	letter-spacing: 5px;
	margin-top: -30px;
	padding: 30px 0 20px;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	width: 60%;
	z-index: 1;
}
