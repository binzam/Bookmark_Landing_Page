function toggleFAQ(index) {
  const faqItems = document.querySelectorAll('.faq_item');
  const selectedFAQ = faqItems[index];
  selectedFAQ.classList.toggle('active');
}
