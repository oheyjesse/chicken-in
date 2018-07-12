const shiftData = [
  {
    id: 1,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 2,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 3,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 4,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 5,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 6,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 7,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 8,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 9,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
]


const managerSchema = 
{
  id: String,
  email: String,
  password: String
}

const employeeSchema = {
  id: String,
  name: String,
  email: String,
  password: String, // randomly generate a password upon creation and send emial to employee
  location: [ String ],
  standardRate: Number, // cents
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
  }
}

const shiftSchema = 
{
  id: String,
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  date: Number,
  location: String,
  startTime: Number,
  endTime: Number,
  standardMinutes: Number,
  overtimeMinutes: Number,
  doubleTimeMinutes: Number,
  totalPay: Number, // cents
  status: String
}

const businessSchema = {
  name: String,
  address: String,
  locations: [String],
  overtimeMultiplier: Number,
  doubleTimeMultiplier: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager'
  }
}