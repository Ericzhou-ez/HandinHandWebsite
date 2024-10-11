const texts = [
   "Every voice resonates,",
   "Every struggle finds solace,",
   "Every hand finds its counterpart."
 ];
 
 let index = 0;
 let charIndex = 0;
 let isDeleting = false;
 const typingSpeed = 100;
 const deletingSpeed = 50;
 const pauseDuration = 1000;
 
 const typedTextElement = document.getElementById('typed-text');
 const cursorElement = document.getElementById('cursor');
 
 function type() {
   if (isDeleting) {
     if (charIndex > 0) {
       charIndex--;
       typedTextElement.textContent = texts[index].substring(0, charIndex);
       setTimeout(type, deletingSpeed);
     } else {
       isDeleting = false;
       index = (index + 1) % texts.length;
       setTimeout(type, typingSpeed);
     }
   } else {
     if (charIndex < texts[index].length) {
       typedTextElement.textContent = texts[index].substring(0, charIndex + 1);
       charIndex++;
       setTimeout(type, typingSpeed);
     } else {
       isDeleting = true;
       setTimeout(type, pauseDuration);
     }
   }
 }
 
 document.addEventListener("DOMContentLoaded", function() {
   setTimeout(type, typingSpeed);
 });
 