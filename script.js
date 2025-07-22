function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

function changeMainImage(modalId, newSrc) {
  const mainImg = document.getElementById(modalId + '-main');
  mainImg.src = newSrc;
  
  // サムネイルのアクティブ状態を更新
  const modal = document.getElementById(modalId);
  const thumbnails = modal.querySelectorAll('.thumbnail-list img');
  thumbnails.forEach(thumb => {
    thumb.classList.remove('active');
    if (thumb.src === newSrc) {
      thumb.classList.add('active');
    }
  });
}

// モーダルの外側をクリックして閉じる
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// 初期状態で最初のサムネイルをアクティブに
document.addEventListener('DOMContentLoaded', function() {
  const modals = ['modal1', 'modal2', 'modal3', 'modal4'];
  modals.forEach(modalId => {
    const modal = document.getElementById(modalId);
    const firstThumbnail = modal.querySelector('.thumbnail-list img');
    if (firstThumbnail) {
      firstThumbnail.classList.add('active');
    }
  });
});
