// Valentine's Day Gift Website - JavaScript with Games

// Data structure to hold all messages and animations
let valentineData = {
    textMessages: [],
    animationDescriptions: [],
    siteStructure: []
};

// Day selection and theming
let selectedDay = localStorage.getItem('selectedDay') || null;
let dayTheme = {};

const dayThemes = {
    'rose-day': {
        name: '🌹 Rose Day',
        color: '#E91E63',
        date: 'Feb 7',
        items: ['🌹', '💕', '🌺', '💕'],
        coupleQuestions: [
            'What was your first impression of your partner?',
            'What do you love most about them?',
            'Share your favorite memory together',
            'What makes you smile about them?',
            'How do you show your love daily?',
            'What\'s your dream date together?',
            'Why did you fall in love?',
            'What\'s your favorite moment?',
            'How do they make you feel?',
            'Where do you see your love in 5 years?'
        ]
    },
    'propose-day': {
        name: '💍 Propose Day',
        color: '#FF1744',
        date: 'Feb 8',
        items: ['💍', '💎', '✨', '💫'],
        coupleQuestions: [
            'How would you propose?',
            'What does commitment mean to you?',
            'What\'s your dream proposal?',
            'How do you want to spend your future?',
            'What promises would you make?',
            'What\'s your biggest dream with them?',
            'How do you want to grow together?',
            'What would make perfect?',
            'Share your deepest commitment',
            'How will you cherish this forever?'
        ]
    },
    'chocolate-day': {
        name: '🍫 Chocolate Day',
        color: '#8B4513',
        date: 'Feb 9',
        items: ['🍫', '🤎', '🍰', '🤎'],
        coupleQuestions: [
            'What\'s your favorite chocolate moment together?',
            'Sweet memories you\'d like to have?',
            'What\'s your perfect sweet date?',
            'How do you sweeten their day?',
            'What\'s your favorite treat together?',
            'What\'s sweet about your love?',
            'Favorite dessert to share?',
            'What makes your heart melt?',
            'Sweetest thing they\'ve done?',
            'Your perfect chocolate night?'
        ]
    },
    'teddy-day': {
        name: '🧸 Teddy Day',
        color: '#FF69B4',
        date: 'Feb 10',
        items: ['🧸', '🤎', '🎀', '🤎'],
        coupleQuestions: [
            'What does comfort mean in your relationship?',
            'How do you comfort each other?',
            'What makes you feel safe together?',
            'Share a comforting moment',
            'How do you show care?',
            'What\'s your comfort zone together?',
            'Favorite cozy moment?',
            'How do you cuddle life\'s challenges?',
            'What creates security in your love?',
            'Your perfect cozy night?'
        ]
    },
    'promise-day': {
        name: '🤝 Promise Day',
        color: '#9C27B0',
        date: 'Feb 11',
        items: ['🤝', '✋', '💜', '💜'],
        coupleQuestions: [
            'What promise would you make?',
            'How do you keep promises?',
            'What\'s your biggest promise?',
            'How do you show loyalty?',
            'What do you promise for tomorrow?',
            'How will you stay true?',
            'Your most important vow?',
            'How do you support each other?',
            'What\'s your sacred promise?',
            'How will you honor this love?'
        ]
    },
    'hug-day': {
        name: '🤗 Hug Day',
        color: '#00BCD4',
        date: 'Feb 12',
        items: ['🤗', '💙', '🌊', '💙'],
        coupleQuestions: [
            'What does a hug mean to you?',
            'When do you need a hug most?',
            'Your favorite way to embrace?',
            'How do hugs comfort you?',
            'What\'s your perfect embrace?',
            'How do you show physical affection?',
            'Favorite hug memory?',
            'How does a hug fix things?',
            'What\'s your hug language?',
            'When is a hug most needed?'
        ]
    },
    'kiss-day': {
        name: '💋 Kiss Day',
        color: '#FF6EC7',
        date: 'Feb 13',
        items: ['💋', '❤️', '😘', '❤️'],
        coupleQuestions: [
            'Describe your perfect kiss',
            'Where would you kiss first?',
            'What does a kiss mean?',
            'Your favorite kiss moment?',
            'How do kisses make you feel?',
            'Share your most romantic moment',
            'What\'s your kiss style?',
            'When do you want to kiss?',
            'How do you express with kisses?',
            'Your forever kiss promise?'
        ]
    }
};

// Game state
let gameState = {
    matchGame: {
        score: 0,
        matched: 0,
        total: 0
    },
    memoryGame: {
        cards: [],
        flipped: [],
        matched: [],
        moves: 0,
        matches: 0
    },
    coupleGame: {
        currentQuestion: 0,
        answered: 0,
        answers: []
    }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    if (!selectedDay) {
        document.getElementById('daySelectionModal').style.display = 'flex';
    } else {
        document.getElementById('daySelectionModal').style.display = 'none';
        updateUIForDay();
    }
    
    loadDataFromStorage();
    renderMessages();
    renderAnimations();
});

// ==============================
// DAY SELECTION FUNCTIONS
// ==============================

function selectDay(dayKey, dayName, color) {
    selectedDay = dayKey;
    dayTheme = dayThemes[dayKey];
    localStorage.setItem('selectedDay', dayKey);
    
    document.getElementById('daySelectionModal').style.display = 'none';
    updateUIForDay();
    
    showCelebration();
}

function resetDay() {
    localStorage.removeItem('selectedDay');
    selectedDay = null;
    location.reload();
}

function updateUIForDay() {
    if (!selectedDay || !dayThemes[selectedDay]) return;
    
    const theme = dayThemes[selectedDay];
    document.documentElement.style.setProperty('--primary-color', theme.color);
    document.getElementById('navDayInfo').innerHTML = `<span style="color: ${theme.color}; font-weight: bold;">${theme.name}</span>`;
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.innerHTML = `
            <h1>💕 ${theme.name} Gift Generator 💕</h1>
            <p>Create beautiful love messages, play couple games, and send via QR code!</p>
            <button class="btn btn-primary" onclick="scrollToSection('#messages')">Get Started</button>
        `;
    }
}

function showCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.innerHTML = `
        <div class="celebration-content">
            <h2>🎉 ${dayTheme.name} Selected! 🎉</h2>
            <p>Everything is now themed for ${dayTheme.name}!</p>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Let's Go! 💕</button>
        </div>
    `;
    document.body.appendChild(celebration);
}

// ==============================
// MATCH GAME FUNCTIONS
// ==============================

function startMatchGame() {
    document.getElementById('gamesMenu').style.display = 'none';
    document.getElementById('matchGameSection').style.display = 'block';
    
    const theme = dayThemes[selectedDay];
    document.getElementById('matchItemName').textContent = theme.name;
    
    initializeMatchGame();
    scrollToSection('#games');
}

function initializeMatchGame() {
    gameState.matchGame = {
        score: 0,
        matched: 0,
        total: 8
    };
    
    const items = dayThemes[selectedDay].items;
    const gameBoard = document.getElementById('matchGameBoard');
    gameBoard.innerHTML = '';
    
    const tiles = [...items, ...items].sort(() => Math.random() - 0.5);
    
    tiles.forEach((item, index) => {
        const tile = document.createElement('div');
        tile.className = 'match-tile';
        tile.innerHTML = `<span class="tile-item">${item}</span>`;
        tile.onclick = () => checkMatch(tile, item, index);
        gameBoard.appendChild(tile);
    });
    
    updateMatchScore();
}

function checkMatch(tile, item, index) {
    if (tile.classList.contains('matched') || tile.classList.contains('flipped')) return;
    
    tile.classList.add('flipped');
    tile.innerHTML = `<span class="tile-item">${item}</span>`;
    
    const flipped = document.querySelectorAll('.match-tile.flipped:not(.matched)');
    
    if (flipped.length === 2) {
        setTimeout(() => {
            const item1 = flipped[0].querySelector('.tile-item').textContent;
            const item2 = flipped[1].querySelector('.tile-item').textContent;
            
            if (item1 === item2) {
                flipped[0].classList.add('matched');
                flipped[1].classList.add('matched');
                gameState.matchGame.matched++;
                gameState.matchGame.score += 10;
                
                if (gameState.matchGame.matched === gameState.matchGame.total) {
                    setTimeout(() => {
                        alert('🎉 Congratulations! You matched all pairs!\n👫 Your bond is perfect!');
                    }, 300);
                }
            } else {
                flipped[0].classList.remove('flipped');
                flipped[1].classList.remove('flipped');
                flipped[0].innerHTML = '';
                flipped[1].innerHTML = '';
            }
            
            updateMatchScore();
        }, 500);
    }
}

function updateMatchScore() {
    document.getElementById('matchScore').textContent = gameState.matchGame.score;
}

function resetMatchGame() {
    initializeMatchGame();
}

// ==============================
// COUPLE GAME FUNCTIONS
// ==============================

function startCoupleGame() {
    document.getElementById('gamesMenu').style.display = 'none';
    document.getElementById('coupleGameSection').style.display = 'block';
    
    gameState.coupleGame = {
        currentQuestion: 0,
        answered: 0,
        answers: []
    };
    
    showNextCoupleQuestion();
    scrollToSection('#games');
}

function showNextCoupleQuestion() {
    const theme = dayThemes[selectedDay];
    const questions = theme.coupleQuestions;
    const currentQ = gameState.coupleGame.currentQuestion;
    
    if (currentQ < questions.length) {
        const question = questions[currentQ];
        const coupleContent = document.getElementById('coupleGameContent');
        
        coupleContent.innerHTML = `
            <div class="couple-question-card">
                <h3 class="question-text">${question}</h3>
                <div class="couple-input-area">
                    <textarea id="coupleAnswer" placeholder="Share your answer here..." class="couple-textarea"></textarea>
                    <div class="couple-buttons">
                        <button class="btn btn-success" onclick="saveAndNextQuestion()">Next ➜</button>
                        <button class="btn btn-secondary" onclick="skipQuestion()">Skip</button>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('questionNumber').textContent = currentQ + 1;
    } else {
        endCoupleGame();
    }
}

function saveAndNextQuestion() {
    const answer = document.getElementById('coupleAnswer').value;
    if (answer.trim()) {
        gameState.coupleGame.answers.push(answer);
        gameState.coupleGame.answered++;
    }
    
    gameState.coupleGame.currentQuestion++;
    showNextCoupleQuestion();
}

function skipQuestion() {
    gameState.coupleGame.currentQuestion++;
    showNextCoupleQuestion();
}

function endCoupleGame() {
    const coupleContent = document.getElementById('coupleGameContent');
    const answered = gameState.coupleGame.answered;
    
    coupleContent.innerHTML = `
        <div class="couple-complete">
            <h2>💕 Challenge Complete! 💕</h2>
            <p>You answered <strong>${answered}/10</strong> questions!</p>
            <div class="answers-summary">
                <h3>Your Beautiful Answers:</h3>
                <div class="answers-list">
                    ${gameState.coupleGame.answers.map(ans => `<p>"${ans}"</p>`).join('')}
                </div>
            </div>
            <button class="btn btn-primary" onclick="backToGames()">Back to Games</button>
        </div>
    `;
}

// ==============================
// MEMORY GAME FUNCTIONS
// ==============================

function startMemoryGame() {
    document.getElementById('gamesMenu').style.display = 'none';
    document.getElementById('memoryGameSection').style.display = 'block';
    
    initializeMemoryGame();
    scrollToSection('#games');
}

function initializeMemoryGame() {
    gameState.memoryGame = {
        cards: [],
        flipped: [],
        matched: [],
        moves: 0,
        matches: 0
    };
    
    const items = dayThemes[selectedDay].items;
    const cards = [...items, ...items].sort(() => Math.random() - 0.5);
    
    gameState.memoryGame.cards = cards;
    
    const gameBoard = document.getElementById('memoryGameBoard');
    gameBoard.innerHTML = '';
    
    cards.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.setAttribute('data-index', index);
        card.innerHTML = '<span class="card-emoji">?</span>';
        card.onclick = () => flipMemoryCard(index, card);
        gameBoard.appendChild(card);
    });
    
    updateMemoryDisplay();
}

function flipMemoryCard(index, card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (gameState.memoryGame.flipped.length >= 2) return;
    
    card.classList.add('flipped');
    card.querySelector('.card-emoji').textContent = gameState.memoryGame.cards[index];
    gameState.memoryGame.flipped.push({ index, card });
    
    if (gameState.memoryGame.flipped.length === 2) {
        gameState.memoryGame.moves++;
        checkMemoryMatch();
    }
    
    updateMemoryDisplay();
}

function checkMemoryMatch() {
    const [first, second] = gameState.memoryGame.flipped;
    const match = gameState.memoryGame.cards[first.index] === gameState.memoryGame.cards[second.index];
    
    setTimeout(() => {
        if (match) {
            first.card.classList.add('matched');
            second.card.classList.add('matched');
            gameState.memoryGame.matched.push(first.index, second.index);
            gameState.memoryGame.matches++;
            
            if (gameState.memoryGame.matches === 8) {
                setTimeout(() => {
                    alert(`🎉 You Won!\n👫 Completed in ${gameState.memoryGame.moves} moves!\nYour memory is as strong as your love!`);
                }, 300);
            }
        } else {
            first.card.classList.remove('flipped');
            second.card.classList.remove('flipped');
            first.card.querySelector('.card-emoji').textContent = '?';
            second.card.querySelector('.card-emoji').textContent = '?';
        }
        
        gameState.memoryGame.flipped = [];
        updateMemoryDisplay();
    }, 1000);
}

function updateMemoryDisplay() {
    document.getElementById('memoryMoves').textContent = gameState.memoryGame.moves;
    document.getElementById('memoryMatches').textContent = gameState.memoryGame.matches;
}

function resetMemoryGame() {
    initializeMemoryGame();
}

// ==============================
// GAME MENU FUNCTIONS
// ==============================

function backToGames() {
    document.getElementById('matchGameSection').style.display = 'none';
    document.getElementById('coupleGameSection').style.display = 'none';
    document.getElementById('memoryGameSection').style.display = 'none';
    document.getElementById('gamesMenu').style.display = 'block';
}

// ========================
// MESSAGE FUNCTIONS
// ========================

function addMessage() {
    const sender = document.getElementById('senderInput').value;
    const recipient = document.getElementById('recipientInput').value;
    const messageContent = document.getElementById('messageInput').value;
    const imageInput = document.getElementById('imageInput');
    
    if (!sender || !recipient || !messageContent) {
        alert('Please fill in all message fields!');
        return;
    }

    const timestamp = new Date().toLocaleString();
    let imageData = null;

    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageData = e.target.result;
            saveMessage(sender, recipient, messageContent, timestamp, imageData);
            clearMessageForm();
            renderMessages();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        saveMessage(sender, recipient, messageContent, timestamp, imageData);
        clearMessageForm();
        renderMessages();
    }
}

function saveMessage(sender, recipient, content, timestamp, image) {
    const message = {
        sender,
        recipient,
        message_content: content,
        timestamp,
        image: image,
        day: selectedDay
    };
    valentineData.textMessages.push(message);
    saveDataToStorage();
}

function clearMessageForm() {
    document.getElementById('senderInput').value = '';
    document.getElementById('recipientInput').value = '';
    document.getElementById('messageInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('imagePreview').innerHTML = '';
}

function renderMessages() {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = '';

    if (valentineData.textMessages.length === 0) {
        container.innerHTML = '<p class="empty-state">No messages yet. Add one above!</p>';
        return;
    }

    valentineData.textMessages.forEach((msg, index) => {
        const msgCard = document.createElement('div');
        msgCard.className = 'message-card';
        msgCard.innerHTML = `
            <div class="card-header">
                <span class="from-to">From: ${msg.sender} → To: ${msg.recipient}</span>
                <span class="timestamp">${msg.timestamp}</span>
            </div>
            ${msg.image ? `<img src="${msg.image}" alt="Message image" class="message-image">` : ''}
            <div class="card-content">
                <p>${msg.message_content}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-sm btn-edit" onclick="editMessage(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteMessage(${index})">Delete</button>
            </div>
        `;
        container.appendChild(msgCard);
    });
}

function deleteMessage(index) {
    if (confirm('Are you sure you want to delete this message?')) {
        valentineData.textMessages.splice(index, 1);
        saveDataToStorage();
        renderMessages();
    }
}

function editMessage(index) {
    const msg = valentineData.textMessages[index];
    document.getElementById('senderInput').value = msg.sender;
    document.getElementById('recipientInput').value = msg.recipient;
    document.getElementById('messageInput').value = msg.message_content;
    
    document.getElementById('senderInput').scrollIntoView({ behavior: 'smooth' });
    
    if (msg.image) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${msg.image}" alt="Preview" style="max-width: 200px; margin-top: 10px;">`;
    }
    
    deleteMessage(index);
}

// ========================
// ANIMATION FUNCTIONS
// ========================

function addAnimation() {
    const animName = document.getElementById('animNameInput').value;
    const animDesc = document.getElementById('animDescInput').value;
    const animType = document.getElementById('animTypeInput').value;

    if (!animName || !animDesc || !animType) {
        alert('Please fill in all animation fields!');
        return;
    }

    const animation = {
        animation_name: animName,
        description: animDesc,
        animation_type: animType,
        day: selectedDay
    };

    valentineData.animationDescriptions.push(animation);
    saveDataToStorage();
    clearAnimationForm();
    renderAnimations();
}

function clearAnimationForm() {
    document.getElementById('animNameInput').value = '';
    document.getElementById('animDescInput').value = '';
    document.getElementById('animTypeInput').value = 'fade';
}

function renderAnimations() {
    const container = document.getElementById('animationsContainer');
    container.innerHTML = '';

    if (valentineData.animationDescriptions.length === 0) {
        container.innerHTML = '<p class="empty-state">No animations yet. Add one above!</p>';
        return;
    }

    valentineData.animationDescriptions.forEach((anim, index) => {
        const animCard = document.createElement('div');
        animCard.className = `animation-card animation-${anim.animation_type}`;
        animCard.innerHTML = `
            <div class="card-header">
                <h4>${anim.animation_name}</h4>
                <span class="anim-type">Type: ${anim.animation_type}</span>
            </div>
            <div class="card-content">
                <p>${anim.description}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-sm btn-edit" onclick="editAnimation(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteAnimation(${index})">Delete</button>
            </div>
        `;
        container.appendChild(animCard);
    });
}

function deleteAnimation(index) {
    if (confirm('Are you sure you want to delete this animation?')) {
        valentineData.animationDescriptions.splice(index, 1);
        saveDataToStorage();
        renderAnimations();
    }
}

function editAnimation(index) {
    const anim = valentineData.animationDescriptions[index];
    document.getElementById('animNameInput').value = anim.animation_name;
    document.getElementById('animDescInput').value = anim.description;
    document.getElementById('animTypeInput').value = anim.animation_type;
    
    document.getElementById('animNameInput').scrollIntoView({ behavior: 'smooth' });
    deleteAnimation(index);
}

// ========================
// QR CODE FUNCTIONS
// ========================

function generateQRCode() {
    const qrDiv = document.getElementById('qrCodeDiv');
    const downloadBtn = document.getElementById('downloadBtn');
    
    qrDiv.innerHTML = '';
    
    const dataString = btoa(JSON.stringify(valentineData));
    const baseUrl = window.location.href.split('?')[0];
    const fullUrl = `${baseUrl}?gift=${dataString}`;
    
    window.currentQRUrl = fullUrl;
    
    new QRCode(qrDiv, {
        text: fullUrl,
        width: 256,
        height: 256,
        colorDark: dayTheme.color || "#E91E63",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    downloadBtn.style.display = 'inline-block';
    
    alert('QR Code generated! Users who scan it will see all your messages, games, and animations!');
}

function downloadQRCode() {
    const qrCanvas = document.querySelector('#qrCodeDiv canvas');
    if (!qrCanvas) {
        alert('Please generate a QR code first!');
        return;
    }
    
    const link = document.createElement('a');
    link.href = qrCanvas.toDataURL('image/png');
    link.download = 'valentine-gift-qrcode.png';
    link.click();
}

// ========================
// PREVIEW FUNCTIONS
// ========================

function togglePreview() {
    const preview = document.getElementById('previewContent');
    
    if (preview.style.display === 'none') {
        generatePreview();
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

function generatePreview() {
    const preview = document.getElementById('previewContent');
    let html = '<div class="preview-wrapper">';
    
    if (valentineData.textMessages.length > 0) {
        html += '<h3>💌 Messages</h3>';
        valentineData.textMessages.forEach(msg => {
            html += `
                <div class="preview-item">
                    <strong>${msg.sender} → ${msg.recipient}</strong>
                    <p>${msg.message_content}</p>
                    ${msg.image ? `<img src="${msg.image}" alt="Message image" style="max-width: 150px;">` : ''}
                </div>
            `;
        });
    }
    
    if (valentineData.animationDescriptions.length > 0) {
        html += '<h3>✨ Animations</h3>';
        valentineData.animationDescriptions.forEach(anim => {
            html += `
                <div class="preview-item">
                    <strong>${anim.animation_name}</strong> (${anim.animation_type})<br>
                    ${anim.description}
                </div>
            `;
        });
    }
    
    html += '</div>';
    preview.innerHTML = html;
}

// ========================
// IMAGE PREVIEW
// ========================

document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    
    if (imageInput) {
        imageInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imagePreview.innerHTML = `<img src="${event.target.result}" alt="Image preview" style="max-width: 200px; margin-top: 10px;">`;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
});

// ========================
// STORAGE FUNCTIONS
// ========================

function saveDataToStorage() {
    const fullData = {
        valentineData: valentineData,
        selectedDay: selectedDay
    };
    localStorage.setItem('valentineGiftData', JSON.stringify(fullData));
}

function loadDataFromStorage() {
    const stored = localStorage.getItem('valentineGiftData');
    if (stored) {
        try {
            const fullData = JSON.parse(stored);
            valentineData = fullData.valentineData || valentineData;
            selectedDay = fullData.selectedDay || selectedDay;
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }
}

// ========================
// QR CODE SCANNING
// ========================

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('gift')) {
        try {
            const giftData = JSON.parse(atob(params.get('gift')));
            displaySharedGift(giftData);
        } catch (e) {
            console.error('Error loading shared gift:', e);
        }
    }
});

function displaySharedGift(giftData) {
    const modal = document.createElement('div');
    modal.className = 'gift-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>💝 You've Received a Valentine's Gift! 💝</h2>
            <div class="shared-gift-content">
    `;
    
    if (giftData.textMessages && giftData.textMessages.length > 0) {
        modal.innerHTML += '<h3>Messages for You:</h3>';
        giftData.textMessages.forEach(msg => {
            modal.innerHTML += `
                <div class="shared-message">
                    <p><strong>${msg.sender}</strong> says:</p>
                    <p>"${msg.message_content}"</p>
                    ${msg.image ? `<img src="${msg.image}" alt="Message image" style="max-width: 200px; border-radius: 8px;">` : ''}
                </div>
            `;
        });
    }
    
    if (giftData.animationDescriptions && giftData.animationDescriptions.length > 0) {
        modal.innerHTML += '<h3>Special Animations:</h3>';
        giftData.animationDescriptions.forEach(anim => {
            modal.innerHTML += `
                <div class="shared-animation">
                    <h4>${anim.animation_name}</h4>
                    <p>${anim.description}</p>
                </div>
            `;
        });
    }
    
    modal.innerHTML += `
            </div>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ========================
// UTILITY FUNCTIONS
// ========================

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = link.getAttribute('href');
                scrollToSection(target);
            }
        });
    });
});
