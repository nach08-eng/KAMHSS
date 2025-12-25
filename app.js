// 🔐 AUTH GUARD
const role = localStorage.getItem("role");
if (!role) {
    window.location.href = "admin.html";
}



// School Timetable Application - JavaScript

// ========================================
// DATA CONFIGURATION
// ========================================

const teachers = {
    // Kindergarten Teachers
    malathi: { name: 'Mrs. Malathi', subject: 'Rhymes & Activities', category: 'kindergarten', classes: ['L.K.G', 'U.K.G'] },
    anbu: { name: 'Mrs. Anbu', subject: 'Drawing & Crafts', category: 'kindergarten', classes: ['L.K.G', 'U.K.G'] },
    kannan: { name: 'Mr. Kannan', subject: 'Playing & Games', category: 'kindergarten', classes: ['L.K.G', 'U.K.G'] },

    // Primary & Middle School Teachers
    lakshmi: { name: 'Mrs. Lakshmi', subject: 'Tamil', category: 'primary', classes: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'] },
    priya: { name: 'Mrs. Priya', subject: 'English', category: 'primary', classes: ['1st', '2nd', '3rd', '4th', '5th'] },
    kumar: { name: 'Mr. Kumar', subject: 'Maths', category: 'primary', classes: ['1st', '2nd', '3rd', '4th', '5th'] },
    saranya: { name: 'Mrs. Saranya', subject: 'Science', category: 'middle', classes: ['6th', '7th', '8th', '9th'] },
    rajesh: { name: 'Mr. Rajesh', subject: 'Social Science', category: 'middle', classes: ['6th', '7th', '8th', '9th'] },
    murugan: { name: 'Mr. Murugan', subject: 'P.E.T', category: 'primary', classes: ['1st-9th'] },

    // High School Teachers
    ramesh: { name: 'Mr. Ramesh', subject: 'Maths', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] },
    vijay: { name: 'Mr. Vijay', subject: 'Physics', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] },
    meena: { name: 'Mrs. Meena', subject: 'Chemistry', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] },
    deepa: { name: 'Mrs. Deepa', subject: 'Botany', category: 'high', classes: ['11th-A', '12th-A'] },
    senthil: { name: 'Mr. Senthil', subject: 'Zoology', category: 'high', classes: ['11th-A', '12th-A'] },
    kavitha: { name: 'Mrs. Kavitha', subject: 'Computer Science', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] },
    suresh: { name: 'Mr. Suresh', subject: 'Accounts', category: 'high', classes: ['11th-B', '12th-B'] },
    divya: { name: 'Mrs. Divya', subject: 'Business Maths', category: 'high', classes: ['11th-A', '11th-B', '12th-A', '12th-B'] },
    arun: { name: 'Mr. Arun', subject: 'English', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] },
    geetha: { name: 'Mrs. Geetha', subject: 'Tamil', category: 'high', classes: ['10th', '11th-A', '11th-B', '12th-A', '12th-B'] }
};

// Kindergarten Timetable (9:30 AM - 12:00 PM)
const kindergartenSchedule = {
    lkg: [
        { time: '09:30 - 10:00', subject: 'Rhymes', teacher: 'Mrs. Malathi', class: 'subject-rhymes' },
        { time: '10:00 - 10:30', subject: 'Drawing', teacher: 'Mrs. Anbu', class: 'subject-drawing' },
        { time: '10:30 - 10:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '10:45 - 11:15', subject: 'Playing', teacher: 'Mr. Kannan', class: 'subject-playing' },
        { time: '11:15 - 11:45', subject: 'Rhymes', teacher: 'Mrs. Malathi', class: 'subject-rhymes' },
        { time: '11:45 - 12:00', subject: 'Story Time', teacher: 'Mrs. Anbu', class: 'subject-drawing' }
    ],
    ukg: [
        { time: '09:30 - 10:00', subject: 'Drawing', teacher: 'Mrs. Anbu', class: 'subject-drawing' },
        { time: '10:00 - 10:30', subject: 'Rhymes', teacher: 'Mrs. Malathi', class: 'subject-rhymes' },
        { time: '10:30 - 10:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '10:45 - 11:15', subject: 'Rhymes', teacher: 'Mrs. Malathi', class: 'subject-rhymes' },
        { time: '11:15 - 11:45', subject: 'Playing', teacher: 'Mr. Kannan', class: 'subject-playing' },
        { time: '11:45 - 12:00', subject: 'Story Time', teacher: 'Mrs. Anbu', class: 'subject-drawing' }
    ]
};

// Primary School Timetable (9:30 AM - 4:30 PM)
const primarySchedule = {
    1: generatePrimarySchedule('1st'),
    2: generatePrimarySchedule('2nd'),
    3: generatePrimarySchedule('3rd'),
    4: generatePrimarySchedule('4th'),
    5: generatePrimarySchedule('5th')
};

function generatePrimarySchedule(grade) {
    return [
        { time: '09:30 - 10:15', subject: 'Tamil', teacher: 'Mrs. Lakshmi', class: 'subject-tamil' },
        { time: '10:15 - 11:00', subject: 'English', teacher: 'Mrs. Priya', class: 'subject-english' },
        { time: '11:00 - 11:15', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:15 - 12:00', subject: 'Maths', teacher: 'Mr. Kumar', class: 'subject-maths' },
        { time: '12:00 - 12:45', subject: 'Science', teacher: 'Mrs. Saranya', class: 'subject-science' },
        { time: '12:45 - 01:30', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:30 - 02:15', subject: 'Social', teacher: 'Mr. Rajesh', class: 'subject-social' },
        { time: '02:15 - 03:00', subject: 'English', teacher: 'Mrs. Priya', class: 'subject-english' },
        { time: '03:00 - 03:45', subject: 'Maths', teacher: 'Mr. Kumar', class: 'subject-maths' },
        { time: '03:45 - 04:30', subject: 'P.E.T', teacher: 'Mr. Murugan', class: 'subject-pet' }
    ];
}

// Middle School Timetable (9:30 AM - 4:30 PM)
const middleSchedule = {
    6: generateMiddleSchedule('6th'),
    7: generateMiddleSchedule('7th'),
    8: generateMiddleSchedule('8th'),
    9: generateMiddleSchedule('9th')
};

function generateMiddleSchedule(grade) {
    return [
        { time: '09:30 - 10:15', subject: 'Maths', teacher: 'Mr. Kumar', class: 'subject-maths' },
        { time: '10:15 - 11:00', subject: 'Science', teacher: 'Mrs. Saranya', class: 'subject-science' },
        { time: '11:00 - 11:15', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:15 - 12:00', subject: 'English', teacher: 'Mrs. Priya', class: 'subject-english' },
        { time: '12:00 - 12:45', subject: 'Tamil', teacher: 'Mrs. Lakshmi', class: 'subject-tamil' },
        { time: '12:45 - 01:30', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:30 - 02:15', subject: 'Social', teacher: 'Mr. Rajesh', class: 'subject-social' },
        { time: '02:15 - 03:00', subject: 'Science', teacher: 'Mrs. Saranya', class: 'subject-science' },
        { time: '03:00 - 03:45', subject: 'Maths', teacher: 'Mr. Kumar', class: 'subject-maths' },
        { time: '03:45 - 04:30', subject: 'P.E.T', teacher: 'Mr. Murugan', class: 'subject-pet' }
    ];
}

// High School Timetable (8:30 AM - 5:30 PM)
const highSchedule = {
    10: [
        { time: '08:30 - 09:15', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '09:15 - 10:00', subject: 'Science', teacher: 'Mrs. Saranya', class: 'subject-science' },
        { time: '10:00 - 10:45', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '10:45 - 11:00', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:00 - 11:45', subject: 'Tamil', teacher: 'Mrs. Geetha', class: 'subject-tamil' },
        { time: '11:45 - 12:30', subject: 'Social', teacher: 'Mr. Rajesh', class: 'subject-social' },
        { time: '12:30 - 01:15', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:15 - 02:00', subject: 'Computer Science', teacher: 'Mrs. Kavitha', class: 'subject-computer' },
        { time: '02:00 - 02:45', subject: 'Science', teacher: 'Mrs. Saranya', class: 'subject-science' },
        { time: '02:45 - 03:30', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '03:30 - 03:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '03:45 - 04:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '04:30 - 05:30', subject: 'Maths (Special)', teacher: 'Mr. Ramesh', class: 'subject-maths' }
    ],
    '11A': [
        { time: '08:30 - 09:15', subject: 'Physics', teacher: 'Mr. Vijay', class: 'subject-physics' },
        { time: '09:15 - 10:00', subject: 'Chemistry', teacher: 'Mrs. Meena', class: 'subject-chemistry' },
        { time: '10:00 - 10:45', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '10:45 - 11:00', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:00 - 11:45', subject: 'Botany', teacher: 'Mrs. Deepa', class: 'subject-botany' },
        { time: '11:45 - 12:30', subject: 'Zoology', teacher: 'Mr. Senthil', class: 'subject-zoology' },
        { time: '12:30 - 01:15', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:15 - 02:00', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '02:00 - 02:45', subject: 'Tamil', teacher: 'Mrs. Geetha', class: 'subject-tamil' },
        { time: '02:45 - 03:30', subject: 'Computer Science', teacher: 'Mrs. Kavitha', class: 'subject-computer' },
        { time: '03:30 - 03:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '03:45 - 04:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '04:30 - 05:30', subject: 'Business Maths', teacher: 'Mrs. Divya', class: 'subject-business-maths' }
    ],
    '11B': [
        { time: '08:30 - 09:15', subject: 'Accounts', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '09:15 - 10:00', subject: 'Commerce', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '10:00 - 10:45', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '10:45 - 11:00', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:00 - 11:45', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '11:45 - 12:30', subject: 'Tamil', teacher: 'Mrs. Geetha', class: 'subject-tamil' },
        { time: '12:30 - 01:15', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:15 - 02:00', subject: 'Computer Science', teacher: 'Mrs. Kavitha', class: 'subject-computer' },
        { time: '02:00 - 02:45', subject: 'Economics', teacher: 'Mr. Rajesh', class: 'subject-social' },
        { time: '02:45 - 03:30', subject: 'Accounts', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '03:30 - 03:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '03:45 - 04:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '04:30 - 05:30', subject: 'Business Maths', teacher: 'Mrs. Divya', class: 'subject-business-maths' }
    ],
    '12A': [
        { time: '08:30 - 09:15', subject: 'Physics', teacher: 'Mr. Vijay', class: 'subject-physics' },
        { time: '09:15 - 10:00', subject: 'Chemistry', teacher: 'Mrs. Meena', class: 'subject-chemistry' },
        { time: '10:00 - 10:45', subject: 'Botany', teacher: 'Mrs. Deepa', class: 'subject-botany' },
        { time: '10:45 - 11:00', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:00 - 11:45', subject: 'Zoology', teacher: 'Mr. Senthil', class: 'subject-zoology' },
        { time: '11:45 - 12:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '12:30 - 01:15', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:15 - 02:00', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '02:00 - 02:45', subject: 'Tamil', teacher: 'Mrs. Geetha', class: 'subject-tamil' },
        { time: '02:45 - 03:30', subject: 'Computer Science', teacher: 'Mrs. Kavitha', class: 'subject-computer' },
        { time: '03:30 - 03:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '03:45 - 04:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '04:30 - 05:30', subject: 'Business Maths', teacher: 'Mrs. Divya', class: 'subject-business-maths' }
    ],
    '12B': [
        { time: '08:30 - 09:15', subject: 'Accounts', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '09:15 - 10:00', subject: 'Commerce', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '10:00 - 10:45', subject: 'Economics', teacher: 'Mr. Rajesh', class: 'subject-social' },
        { time: '10:45 - 11:00', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '11:00 - 11:45', subject: 'English', teacher: 'Mr. Arun', class: 'subject-english' },
        { time: '11:45 - 12:30', subject: 'Tamil', teacher: 'Mrs. Geetha', class: 'subject-tamil' },
        { time: '12:30 - 01:15', subject: 'Lunch', teacher: '', class: 'subject-lunch' },
        { time: '01:15 - 02:00', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '02:00 - 02:45', subject: 'Computer Science', teacher: 'Mrs. Kavitha', class: 'subject-computer' },
        { time: '02:45 - 03:30', subject: 'Accounts', teacher: 'Mr. Suresh', class: 'subject-accounts' },
        { time: '03:30 - 03:45', subject: 'Break', teacher: '', class: 'subject-break' },
        { time: '03:45 - 04:30', subject: 'Maths', teacher: 'Mr. Ramesh', class: 'subject-maths' },
        { time: '04:30 - 05:30', subject: 'Business Maths', teacher: 'Mrs. Divya', class: 'subject-business-maths' }
    ]
};

// ========================================
// DOM ELEMENTS
// ========================================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

// ========================================
// UTILITY FUNCTIONS
// ========================================
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true });
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    document.getElementById('currentTime').textContent = timeStr;
    document.getElementById('currentDate').textContent = dateStr;
    document.getElementById('todayDate').textContent = dateStr;
}

function generateTimetableHTML(schedule, days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']) {
    let html = '<table class="timetable"><thead><tr><th>Time</th>';
    days.forEach(day => html += `<th>${day}</th>`);
    html += '</tr></thead><tbody>';

    schedule.forEach(period => {
        html += `<tr><td class="time-cell">${period.time}</td>`;
        days.forEach(() => {
            if (period.subject === 'Break' || period.subject === 'Lunch') {
                html += `<td><div class="subject-cell ${period.class}">
                    <div class="subject-name">${period.subject}</div>
                </div></td>`;
            } else {
                html += `<td><div class="subject-cell ${period.class}">
                    <div class="subject-name">${period.subject}</div>
                    <div class="teacher-name">${period.teacher}</div>
                </div></td>`;
            }
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
}

function renderKindergartenTimetable(classType = 'lkg') {
    const schedule = kindergartenSchedule[classType];
    document.getElementById('kindergartenTimetable').innerHTML = generateTimetableHTML(schedule);
}

function renderPrimaryTimetable(grade = '1') {
    const schedule = primarySchedule[grade];
    document.getElementById('primaryTimetable').innerHTML = generateTimetableHTML(schedule);
}

function renderMiddleTimetable(grade = '6') {
    const schedule = middleSchedule[grade];
    document.getElementById('middleTimetable').innerHTML = generateTimetableHTML(schedule);
}

function renderHighTimetable(grade = '10') {
    const schedule = highSchedule[grade];
    document.getElementById('highTimetable').innerHTML = generateTimetableHTML(schedule);
}

function renderTeachers(filter = 'all') {
    const grid = document.getElementById('teachersGrid');
    let html = '';

    Object.values(teachers).forEach(teacher => {
        if (filter === 'all' || teacher.category === filter) {
            const initials = teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2);
            html += `
                <div class="teacher-card" data-category="${teacher.category}">
                    <div class="teacher-header">
                        <div class="teacher-avatar">${initials}</div>
                        <div class="teacher-info">
                            <h3>${teacher.name}</h3>
                            <span class="teacher-subject">${teacher.subject}</span>
                        </div>
                    </div>
                    <div class="teacher-schedule">
                        <h4>Assigned Classes</h4>
                        <div class="schedule-list">
                            ${teacher.classes.map(c => `<span class="schedule-item">${c}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = html;
}

// ========================================
// EVENT LISTENERS
// ========================================

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close on outside click (Mobile)
document.addEventListener('click', (e) => {
    if (
        sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
    ) {
        sidebar.classList.remove('active');
    }
});

// Close on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});


// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;

        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        contentSections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(section).classList.add('active');

        // Close mobile menu
        sidebar.classList.remove('active');
    });
});

// Class Tabs - Kindergarten
document.querySelectorAll('#kindergarten .class-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#kindergarten .class-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderKindergartenTimetable(tab.dataset.class);
    });
});

// Class Tabs - Primary
document.querySelectorAll('#primary .class-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#primary .class-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPrimaryTimetable(tab.dataset.class);
    });
});

// Class Tabs - Middle
document.querySelectorAll('#middle .class-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#middle .class-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMiddleTimetable(tab.dataset.class);
    });
});

// Class Tabs - High
document.querySelectorAll('#high .class-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#high .class-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderHighTimetable(tab.dataset.class);
    });
});

// Teacher Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTeachers(btn.dataset.filter);
    });
});

// Search
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        // Reset all visibility
        document.querySelectorAll('.teacher-card').forEach(card => {
            card.style.display = 'block';
        });
        return;
    }

    // Search in teachers section
    const teacherCards = document.querySelectorAll('.teacher-card');
    let foundCount = 0;

    teacherCards.forEach(card => {
        const teacherName = card.querySelector('.teacher-info h3').textContent.toLowerCase();
        const teacherSubject = card.querySelector('.teacher-subject').textContent.toLowerCase();
        const scheduleItems = Array.from(card.querySelectorAll('.schedule-item'))
            .map(item => item.textContent.toLowerCase()).join(' ');

        const matches = teacherName.includes(query) ||
            teacherSubject.includes(query) ||
            scheduleItems.includes(query);

        if (matches) {
            card.style.display = 'block';
            foundCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // If searching and teachers section is not active, show results notification
    if (foundCount > 0 && !document.getElementById('teachers').classList.contains('active')) {
        console.log(`Found ${foundCount} matching teacher(s). Switch to Teachers section to see results.`);
    }

    // Also search in timetable cells
    const subjectCells = document.querySelectorAll('.subject-cell');
    subjectCells.forEach(cell => {
        const subjectName = cell.querySelector('.subject-name')?.textContent.toLowerCase() || '';
        const teacherName = cell.querySelector('.teacher-name')?.textContent.toLowerCase() || '';

        if (subjectName.includes(query) || teacherName.includes(query)) {
            cell.style.backgroundColor = 'rgba(102, 126, 234, 0.3)';
            cell.style.transform = 'scale(1.05)';
        } else {
            cell.style.backgroundColor = '';
            cell.style.transform = '';
        }
    });
});

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);

    // Initialize timetables
    renderKindergartenTimetable('lkg');
    renderPrimaryTimetable('1');
    renderMiddleTimetable('6');
    renderHighTimetable('10');
    renderTeachers('all');

    // Set welcome image
    const welcomeImg = document.getElementById('welcomeImg');
    welcomeImg.onerror = function () {
        this.style.display = 'none';
    };
});

function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        localStorage.removeItem("isAdminLoggedIn");
        window.location.href = "admin.html";
    }
}


// Disable right-click
                document.addEventListener('contextmenu', function(e) {
                 e.preventDefault();
                });

            // Disable right-click with an alert
                document.addEventListener('contextmenu', function(e) {
                 alert("Sorry, right click is disabled!");
                e.preventDefault();
            });

            // Disable specific keyboard shortcuts
            document.onkeydown = function(e) {
            if (e.keyCode == 123) { // Disable F12
            return false;
           }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Disable Ctrl+Shift+I
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Disable Ctrl+Shift+C
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Disable Ctrl+Shift+J
            return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Disable Ctrl+U
            return false;
            }
            if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { // Disable Ctrl+S
            return false;
            }
            };
