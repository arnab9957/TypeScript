
/**
 * Generics in TypeScript
 * ----------------------
 * Generics let you write reusable, type-safe code by parameterizing types.
 */

// 1) Generic function: identity
function identity<T>(value: T): T {
	return value;
}

const idNumber = identity<number>(42);
const idString = identity("hello");

// 2) Generic function with two type parameters
function pair<K, V>(key: K, value: V): [K, V] {
	return [key, value];
}

const userPair = pair("id", 123);

// 3) Generic interface
interface ApiResult<T> {
	data: T;
	success: boolean;
}

const numberResult: ApiResult<number> = {
	data: 99,
	success: true,
};

// 4) Generic type alias
type Dictionary<T> = {
	[key: string]: T;
};

const scores: Dictionary<number> = {
	alice: 10,
	bob: 15,
};

// 5) Generic class
class Queue<T> {
	private items: T[] = [];

	enqueue(item: T): void {
		this.items.push(item);
	}

	dequeue(): T | undefined {
		return this.items.shift();
	}
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("first");
const firstItem = stringQueue.dequeue();

// 6) Generic constraints with extends
interface HasId {
	id: number;
}

function getId<T extends HasId>(item: T): number {
	return item.id;
}

const id = getId({ id: 10, name: "Aisha" });

// 7) keyof constraint for safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const person = { name: "Liam", age: 30 };
const personName = getProperty(person, "name");

// 8) Generic default type parameter
type ApiResponse<T = string> = {
	status: "success" | "error";
	payload: T;
};

const defaultResponse: ApiResponse = {
	status: "success",
	payload: "OK",
};

const dataResponse: ApiResponse<{ count: number }> = {
	status: "success",
	payload: { count: 5 },
};

// 9) Generics with array helpers
function mapArray<T, U>(items: T[], mapper: (item: T) => U): U[] {
	return items.map(mapper);
}

const lengths = mapArray(["a", "bb", "ccc"], (s) => s.length);

// 10) Conditional types with generics
type NonNullableValue<T> = T extends null | undefined ? never : T;

type MaybeString = string | null;
type SafeString = NonNullableValue<MaybeString>;
