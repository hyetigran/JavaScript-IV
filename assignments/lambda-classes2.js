class Person {
	constructor(data) {
		this.name = data.name;
		this.age = data.age;
		this.location = data.location;
		this.gender = data.gender;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person {
	constructor(instructorData) {
		super(instructorData);
		this.specialty = instructorData.specialty;
		this.favLanguage = instructorData.favLanguage;
		this.catchPhrase = instructorData.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
	//Stretch
	// score(grade){
	//   setInterval(function(){
	//     random = (Math.floor((Math.random() * 10) + 1));
	//     let plusOrMinus = Math.random() < .5 ? -1 : 1;
	//     random = random * plusOrMinus;
	//     currentNum = grade + random;

	//   }
	// }
}

class Student extends Person {
	constructor(studentData) {
		super(studentData);
		this.previousBackground = studentData.previousBackground;
		this.className = studentData.className;
		this.favSubjects = studentData.favSubjects;
		this.grade = studentData.grade; //Stretch
	}
	listsSubjects(subjects) {
		for (let i = 0; i < subjects.length; i++) {
			console.log(subjects[i]);
		}
	}
	aPRAssignment(student, subject) {
		console.log(`${student.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(student, subject) {
		console.log(`${student.name} has began sprint challenge on ${subject}`);
	}
	//Stretch
	graduate(grade, student) {
		if (grade >= 70) {
			console.log(`Congratulations ${student.name}`);
		} else {
			console.log('Keep trying');
		}
	}
}

class ProjectManager extends Instructor {
	constructor(projectData) {
		super(projectData);
		this.gradClassName = projectData.gradClassName;
		this.favInstructor = projectData.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces ${channel}, @channel standby times`);
	}
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

const archer = new ProjectManager({
	name: 'Archer',
	age: 35,
	location: 'Pirate Island',
	gender: 'M',
	specialty: 'Secret Agent',
	favLanguage: 'PunScript',
	catchPhrase: 'Danger Zone',
	gradClassName: 'WEBEU2',
	favInstructor: 'Gabriel'
});

const tigran = new Student({
	name: 'Tigran',
	age: 30,
	location: 'Armenia',
	gender: 'M',
	previousBackground: 'Finance',
	className: 'WEBEU2',
	favSubjects: 'JavaScript',
	grade: Math.floor(Math.random() * 6) + 1 // Stretch: Assigns random number between 1 and 100
});

const gabe = new Instructor({
	name: 'Gabriel',
	age: 35,
	location: 'Spain',
	gender: 'M',
	specialty: 43,
	favLanguage: 'Java',
	catchPhrase: 'Bingo'
});

// Logging methods below to test if they work as intended:

// console.log(archer.standUp('help channel'));
// console.log(tigran.speak());
// console.log(gabe.speak());
// console.log(archer.speak());
// console.log(gabe.demo('JS Classes'));
// console.log(gabe.grade(tigran, 'Javascript'));
// console.log(tigran.listsSubjects(['HTML', 'JavaScript', 'CSS']));
// console.log(tigran.aPRAssignment(tigran, 'Class construction')); //Question: Why do I have to pass 'tigran' as a prop when the 'tigran' instance is the one calling the method?
// console.log(tigran.sprintChallenge(tigran, 'LESS'));
// console.log(archer.debugsCode(tigran, 'React'));
