document.addEventListener('DOMContentLoaded', function () {
    // Profilbild
    const profileImg = document.getElementById('profile-img');
    profileImg.src = 'img/profilbild.jpg';

    // Om mig
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML =
        'Jag är en driven och ambitiös frontend-utvecklare i början av min karriär och trivs med att arbeta både självständigt och i team. Jag är ordningsam, strukturerad, lösningsorienterad och har lätt för att ta ansvar för mina arbetsuppgifter. Jag söker ständigt nya sätt att utvecklas och ser fram emot att tillämpa mina kunskaper i praktiken under en LIA-period.';

    // Utbildning
    const education = [
        {
            name: 'Frontend-utveckling - IT-högskolan',
            period: '2024-08-19 - 2026-06-05'
        },
        { name: 'Webbutveckling 1', period: '2024-01-08 - 2024-03-15' },
        { name: 'Programmering 1', period: '2023-10-16 - 2023-12-22' }
    ];

    const educationList = document.getElementById('education-list');
    education.forEach((edu) => {
        const li = document.createElement('li');
        li.innerHTML = `${edu.name} - ${edu.period}`;
        educationList.appendChild(li);
    });

    // Färdigheter
    const skills = [
        'Webbutveckling: HTML, CSS, JavaScript, React, Vue.js',
        'UX/UI Design: Användarcentrerad design och prototyping',
        'Tidshantering: Förmåga att prioritera och slutföra uppgifter effektivt och i tid',
        'Kommunikation: Både skriftlig och muntlig kommunikation för att förklara tekniska lösningar',
        'Kreativitet och innovation: Tänkande utanför boxen för att skapa användarvänliga lösningar',
        'Kundfokus: Förmåga att skapa användarcentrerade lösningar genom förståelse för kundens behov och krav',
        'Lära sig snabbt: Nyfikenhet och vilja att ständigt utvecklas inom nya teknologier och verktyg'
    ];

    const skillsList = document.getElementById('skills-list');
    skills.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Verktyg
    const tools = [
        'Designverktyg: Figma',
        'Kodredigerare & IDE: VS Code',
        'Versionshantering: Git, GitHub',
        'Projektledning: Trello',
        'Kommunikation: Teams'
    ];

    const toolsList = document.getElementById('tools-list');
    tools.forEach((tool) => {
        const li = document.createElement('li');
        li.textContent = tool;
        toolsList.appendChild(li);
    });

    // Erfarenheter
    const experiences = [
        { title: 'Frontend Utvecklare - IT-högskolan', period: '2024-2026' },
        {
            title: 'Vårdbiträde, Attendo Vegagatan',
            period: 'september 2022 - oktober 2023'
        }
    ];

    const experienceList = document.getElementById('experience-list');
    experiences.forEach((exp) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${exp.title}</strong> - ${exp.period}`;
        experienceList.appendChild(li);
    });
});
