
/**
 * Interfaces in TypeScript
 * ------------------------
 * An interface describes the shape of an object and provides a contract
 * that implementing values must satisfy.
 */

// 1) Basic interface for an object
interface User {
	id: number;
	name: string;
	isActive: boolean;
}

const user: User = {
	id: 1,
	name: "Aisha",
	isActive: true,
};

// 2) Optional properties and readonly
interface Product {
	readonly sku: string;
	title: string;
	price: number;
	discountPercent?: number; // optional
}

const product: Product = {
	sku: "SKU-001",
	title: "Wireless Mouse",
	price: 29.99,
};

// 3) Function type interface
interface Formatter {
	(value: string): string;
}

const toUpper: Formatter = (value) => value.toUpperCase();

// 4) Index signature (dictionary-like object)
interface ScoreMap {
	[player: string]: number;
}

const scores: ScoreMap = {
	alice: 10,
	bob: 15,
};

// 5) Extending interfaces
interface Person {
	firstName: string;
	lastName: string;
}

interface Employee extends Person {
	employeeId: string;
	department: "Engineering" | "HR" | "Sales";
}

const employee: Employee = {
	firstName: "Liam",
	lastName: "Chen",
	employeeId: "E-1001",
	department: "Engineering",
};

// 6) Interface for a class
interface Logger {
	log(message: string): void;
	error(message: string): void;
}

class ConsoleLogger implements Logger {
	log(message: string): void {
		console.log(`INFO: ${message}`);
	}

	error(message: string): void {
		console.error(`ERROR: ${message}`);
	}
}

const logger = new ConsoleLogger();
logger.log("System started");

// 7) Interface with method overloads
interface Parser {
	parse(input: string): number;
	parse(input: string, radix: number): number;
}

const parser: Parser = {
	parse(input: string, radix: number = 10): number {
		return Number.parseInt(input, radix);
	},
};

const valueBase10 = parser.parse("101");
const valueBase2 = parser.parse("101", 2);

// 8) Combining interfaces with intersection types
interface Address {
	city: string;
	country: string;
}

type UserWithAddress = User & Address;

const userWithAddress: UserWithAddress = {
	id: 2,
	name: "Noah",
	isActive: false,
	city: "Toronto",
	country: "Canada",
};

// 9) Readonly array with interface
interface ReadonlyList {
	readonly items: ReadonlyArray<string>;
}

const readonlyList: ReadonlyList = {
	items: ["one", "two", "three"],
};

// 10) Optional method
interface Cache<T> {
	get(key: string): T | undefined;
	set(key: string, value: T): void;
	clear?(): void;
}

class MemoryCache<T> implements Cache<T> {
	private data = new Map<string, T>();

	get(key: string): T | undefined {
		return this.data.get(key);
	}

	set(key: string, value: T): void {
		this.data.set(key, value);
	}
}

const numberCache = new MemoryCache<number>();
numberCache.set("max", 100);
const maxValue = numberCache.get("max");

// 11) Interface for objects with dynamic fields plus known fields
interface ApiResponse {
	status: "success" | "error";
	message?: string;
	[meta: string]: unknown;
}

const response: ApiResponse = {
	status: "success",
	requestId: "req-001",
	durationMs: 120,
};

// 12) Utility: use interface in function parameters
interface CreateUserInput {
	name: string;
	isActive?: boolean;
}

function createUser(input: CreateUserInput): User {
	return {
		id: Math.floor(Math.random() * 1000),
		name: input.name,
		isActive: input.isActive ?? true,
	};
}

const newUser = createUser({ name: "Sofia" });

// 13) Interface merging (declaration merging)
interface Settings {
	theme: "light" | "dark";
}

interface Settings {
	language: "en" | "es" | "fr";
}

const settings: Settings = {
	theme: "dark",
	language: "en",
};










