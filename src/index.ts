interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

const student: Student = {
  id: 1,
  name: "King Jan Jugos",
  email: "king@example.com",
  status: "active",
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: student,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [student],
};

console.log(formatStudent(student));

function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const student = value as Record<string, unknown>;

  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}

const validStudent: unknown = {
  id: 2,
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};

const invalidStudentId: unknown = {
  id: "two",
  name: "Pedro Cruz",
  email: "pedro@example.com",
  status: "active",
};

const invalidStudentName: unknown = {
  id: 3,
  email: "ana@example.com",
  status: "inactive",
};

console.log("Valid student:", isStudent(validStudent));
console.log("Invalid ID:", isStudent(invalidStudentId));
console.log("Missing name:", isStudent(invalidStudentName));
