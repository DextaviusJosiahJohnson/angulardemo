import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a 3rd Year Web Development Student currently enrolled in Holy Angel University. I study coding languages, deployment methods, basic cybersecurity aswell as delve into creative ventures such as blender and lua scripting for personal projects. my goals are to sharpen my existing skills and develop new skills and acquire their certifications.';
}
