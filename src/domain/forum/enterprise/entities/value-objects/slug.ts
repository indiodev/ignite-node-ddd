export class Slug {
	public value: string;

	private constructor(value: string) {
		this.value = value;
	}

	static create(value: string): Slug {
		return new Slug(value);
	}

	/**
	 * Receives a text and normalizes it as a slug
	 *
	 * Example: "An example title" => "an-example-title"
	 * @param text {string}
	 */
	static createFromText(text: string): Slug {
		const slugText = text
			.normalize('NFKD')
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/_/g, '-')
			.replace(/--+/g, '-')
			.replace(/-$/, '');
		return new Slug(slugText);
	}
}
