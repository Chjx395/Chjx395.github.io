// 个人联系方式；未提供的简历链接暂留空。
const profile = { email: '224010095@link.cuhk.edu.cn', github: 'https://github.com/Chjx395', scholar: 'https://scholar.google.com.hk/citations?user=Nn8ZOBnMSf8C&hl=zh-CN', cv: '' };
const linkKeys = { '邮箱': 'email', 'GitHub': 'github', 'Google Scholar': 'scholar', '简历 PDF': 'cv' };
let toastTimer;
document.querySelectorAll('[data-profile]').forEach(button => {
  button.addEventListener('click', () => {
    const label = button.dataset.profile;
    const target = profile[linkKeys[label]];
    if (target) {
      if (label === '邮箱') window.location.href = 'mailto:' + target;
      else if (/^https?:\/\//i.test(target) || (label === '简历 PDF' && /^\.?\/?[\w/-]+\.pdf$/i.test(target))) window.open(target, '_blank', 'noopener,noreferrer');
      return;
    }
    const toast = document.getElementById('toast');
    toast.textContent = label + '尚未填写，补充个人资料后即可使用。';
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
  });
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.paper').forEach(paper => {
      paper.hidden = button.dataset.filter === 'selected' && paper.dataset.selected !== 'true';
    });
  });
});
document.getElementById('news-toggle')?.addEventListener('click', event => {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  button.innerHTML = expanded ? '收起动态 <span>↑</span>' : '更多动态 <span>↓</span>';
  document.querySelectorAll('.older-news').forEach(item => { item.hidden = !expanded; });
});
document.getElementById('year').textContent = new Date().getFullYear();
