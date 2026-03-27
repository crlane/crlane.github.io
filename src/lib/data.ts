export interface Project {
	name: string;
	description: string;
	url?: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		name: 'Project One',
		description: 'A brief description of this project and what it does.',
		url: 'https://github.com/crlane/project-one',
		tags: ['TypeScript', 'Svelte']
	},
	{
		name: 'Project Two',
		description: 'Another project with a short summary of its purpose.',
		url: 'https://github.com/crlane/project-two',
		tags: ['Python']
	}
];

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export const socialLinks: SocialLink[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/crlane',
		icon: 'github'
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/crlane',
		icon: 'linkedin'
	}
];
