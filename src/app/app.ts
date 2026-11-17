import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Nengasca, Renzo D.';
  location = 'City of San Fernando, Pampanga';
  email = 'rdnengasca.cscsoc@gmail.com';
  phone = '0961 XXX XXXX';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Blender',
    'Lua',
    'Git',
    'Kotlin',
    'C#',
    'Java'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' },
    { tool: 'Kotlin', level: 'Intermediate' },
    { tool: 'Blender', level: 'Intermediate' },
    { tool: 'Lua', level: 'Intermediate' },
    { tool: 'C#', level: 'Advanced' },
    { tool: 'Unity Engine', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
