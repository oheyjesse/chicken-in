import moment from 'moment'

const dummyBusiness = [
  {
    _id: '123456',
    name: 'Red Rocks Charcoal Chicken',
    address: '120 Main Road, Highvale, VIC',
    locations: ['Melbourne', 'Sydney', 'Perth', 'Brisbane', 'Hobart', 'Donvale', 'South Yarra', 'Adelaide', 'Darwin', 'Point Cook'],
    overtimeMultiplier: 1.5,
    doubleTimeMultiplier: 2.0
  },
  {
    _id: '654321',
    name: 'The Wrong Business',
    address: '99 Bad Idea Pl, Wrongtowne, SA',
    locations: ['Wrongtowne', 'Badsville', 'Awkward Point'],
    overtimeMultiplier: 1.3,
    doubleTimeMultiplier: 1.5
  }
]

const dummyShifts = [
  {
    id: 1,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(1, 'days').valueOf(),
    location: 'Sapringvale',
    name: 'c',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'rejected'
  },
  {
    id: 2,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(2, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'h',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'pending'
  },
  {
    id: 3,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(3, 'days').valueOf(),
    location: 'Sypringvale',
    name: 'g',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 4,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(4, 'days').valueOf(),
    location: 'Sjpringvale',
    name: 'a',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'pending'
  },
  {
    id: 5,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(0, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'k',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 6,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(1, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'b',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'pending'
  },
  {
    id: 7,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(2, 'days').valueOf(),
    location: 'Svpringvale',
    name: 'y',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 8,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(3, 'days').valueOf(),
    location: 'Stpringvale',
    name: 'j',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'pending'
  },
  {
    id: 9,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(4, 'days').valueOf(),
    location: 'Sapringvale',
    name: 'i',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'rejected'
  },
  {
    id: 10,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(5, 'days').valueOf(),
    location: 'Smpringvale',
    name: 'e',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 11,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(6, 'days').valueOf(),
    location: 'Svpringvale',
    name: 'p',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 12,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(7, 'days').valueOf(),
    location: 'Supringvale',
    name: 'v',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 13,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(8, 'days').valueOf(),
    location: 'Sopringvale',
    name: 'u',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 14,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(9, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'x',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 15,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(10, 'days').valueOf(),
    location: 'Shpringvale',
    name: 'p',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 16,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(11, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'd',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 17,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(12, 'days').valueOf(),
    location: 'Srpringvale',
    name: 'm',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 18,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(13, 'days').valueOf(),
    location: 'Sbpringvale',
    name: 'e',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 19,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(14, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'n',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 20,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(15, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'e',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  },
  {
    id: 21,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(16, 'days').valueOf(),
    location: 'Sbpringvale',
    name: 'w',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 2000),
    status: 'approved'
  }
]

const dummyEmployee = {
  id: 66,
  name: 'Steven Salad',
  email: 'steve@redrocks.com',
  password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
  locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
  standardRate: 2000, // cents
  business: {
    type: 2,
    ref: 'Business'
  }
}

const dummyData = [
  {
    id: 90,
    firstName: 'Elliott',
    lastName: 'Smith',
    email: 'elliott@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Hobart', 'Sunshine' ],
    standardRate: 2000, // cents
    business: '123'
  },
  {
    id: 91,
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'robert@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale' ],
    standardRate: 1000, // cents
    business: '123'
  },
  {
    id: 92,
    firstName: 'Trent',
    lastName: 'Reznor',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Sunshine' ],
    standardRate: 3000, // cents
    business: '123'
  },
  {
    id: 93,
    firstName: 'Kurt',
    lastName: 'Cobain',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 4000, // cents
    business: '123'
  },
  {
    id: 94,
    firstName: 'Billy',
    lastName: 'Kogan',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 500, // cents
    business: '123'
  },
  {
    id: 95,
    firstName: 'Thom',
    lastName: 'Yorke',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 2200, // cents
    business: '123'
  }
]

export { dummyShifts, dummyEmployee, dummyData, dummyBusiness }

// const managerSchema = 
// {
//   id: String,
//   email: String,
//   password: String,
//   business: {
//    type: mongoose.Schema.Types.ObjectId,
//    ref: 'Business'
//   }
// }

// const employeeSchema = {
//   id: String,
//   name: String,
//   email: String,
//   password: String, // randomly generate a password upon creation and send emial to employee
//   location: [ String ],
//   standardRate: Number, // cents
//   business: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Business'
//   }
// }

// const shiftSchema = 
// {
//   id: String,
//   employee: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Employee'
//   },
//   date: Number,
//   location: String,
//   startTime: Number,
//   endTime: Number,
//   standardMinutes: Number,
//   overtimeMinutes: Number,
//   doubleTimeMinutes: Number,
//   totalPay: Number, // cents
//   status: String
// }

// const businessSchema = {
//   name: String,
//   address: String,
//   locations: [String],
//   overtimeMultiplier: Number,
//   doubleTimeMultiplier: Number
// }