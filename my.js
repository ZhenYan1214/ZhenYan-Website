document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const items = document.querySelectorAll('.portfolio-items .item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const totalItems = items.length;
let currentStartIndex = 0; // 當前顯示起點

// 更新可見的作品
function updateVisibleItems() {
    items.forEach((item, index) => {
        // 確定作品是否在可見範圍內
        if (
            index === currentStartIndex ||
            index === (currentStartIndex + 1) % totalItems ||
            index === (currentStartIndex + 2) % totalItems
        ) {
            item.style.display = 'flex'; // 顯示在範圍內的作品
        } else {
            item.style.display = 'none'; // 隱藏其他作品
        }
    });
}

// 點擊 "下一個" 按鈕
nextBtn.addEventListener('click', () => {
    currentStartIndex = (currentStartIndex + 1) % totalItems; // 起始點 +1，並取模以防溢出
    updateVisibleItems();
});

// 點擊 "上一個" 按鈕
prevBtn.addEventListener('click', () => {
    currentStartIndex =
        (currentStartIndex - 1 + totalItems) % totalItems; // 起始點 -1，取模以防負數
    updateVisibleItems();
});

// 初始化顯示
updateVisibleItems();









