function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleMenu() {
    console.log('toggleMenu()');
    const menuItems = document.getElementById('menuItems');
    console.log(menuItems.classList);
    if (menuItems.classList.contains('hide')) {
        console.log('contains hide')
        menuItems.classList.remove('hide');
        menuItems.classList.add('show');
        console.log('show');
    } else {
        console.log('not contains hide')
        menuItems.classList.remove('show');
        menuItems.classList.add('hide');
        console.log('hide');
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     function updateClock() {
//         const now = new Date();
//         let hours = now.getHours().toString().padStart(2, '0');
//         let minutes = now.getMinutes().toString().padStart(2, '0');
//         let seconds = now.getSeconds().toString().padStart(2, '0');
//         document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
//     }

//     function updateDate() {
//         const now = new Date();
//         let year = now.getFullYear();
//         let month = (now.getMonth() + 1).toString().padStart(2, '0');
//         let day = now.getDate().toString().padStart(2, '0');
//         document.getElementById('date').textContent = `${year}/${month}/${day}`;
//     }

//     setInterval(updateClock, 1000);
//     updateClock(); // 초기 로드 시 시계 업데이트
//     updateDate(); // 초기 로드 시 날짜 업데이트
// });

function updateDate() {
    const now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    document.getElementById('date').textContent = `${year}/${month}/${day}`;
}

setInterval(updateClock, 1000);
updateClock();
updateDate();