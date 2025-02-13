 // Task 1
 document.getElementById('changeButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    this.textContent = inputText;
});

// Task 2
document.getElementById('image').src = 'image2.jpg';

// Task 3
document.getElementById('link').href = 'https://new-url.com';
document.getElementById('linkImage').alt = 'New Image Description';

// Task 4
document.getElementById('firstItem').textContent = 'Updated Item 1';