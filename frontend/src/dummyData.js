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
    _id: 1,
    employee: {
      firstName: 'sStact',
      lastName: 'mBartzena'
    },
    date: moment().add(1, 'days').valueOf(),
    location: 'Sapringvale',
    name: 'c',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'rejected'
  },
  {
    _id: 2,
    employee: {
      firstName: 'uStact',
      lastName: 'nBartzena'
    },
    date: moment().add(2, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'h',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'pending'
  },
  {
    _id: 3,
    employee: {
      firstName: 'eStact',
      lastName: 'aBartzena'
    },
    date: moment().add(3, 'days').valueOf(),
    location: 'Sypringvale',
    name: 'g',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 4,
    employee: {
      firstName: 'bnvStact',
      lastName: 'sgfBartzena'
    },
    date: moment().add(4, 'days').valueOf(),
    location: 'Sjpringvale',
    name: 'a',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'pending'
  },
  {
    _id: 5,
    employee: {
      firstName: 'abyStact',
      lastName: 'msktuBartzena'
    },
    date: moment().add(0, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'k',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 6,
    employee: {
      firstName: 'CStact',
      lastName: 'bsBartzena'
    },
    date: moment().subtract(1, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'b',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'pending'
  },
  {
    _id: 7,
    employee: {
      firstName: 'weStact',
      lastName: 'tmuBartzena'
    },
    date: moment().subtract(2, 'days').valueOf(),
    location: 'Svpringvale',
    name: 'y',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 8,
    employee: {
      firstName: 'erytStact',
      lastName: 'ABartzena'
    },
    date: moment().subtract(3, 'days').valueOf(),
    location: 'Stpringvale',
    name: 'j',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'pending'
  },
  {
    _id: 9,
    employee: {
      firstName: 'cvxStact',
      lastName: 'weqBartzena'
    },
    date: moment().subtract(4, 'days').valueOf(),
    location: 'Sapringvale',
    name: 'i',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'rejected'
  },
  {
    _id: 10,
    employee: {
      firstName: 'gStact',
      lastName: 'kBartzena'
    },
    date: moment().subtract(5, 'days').valueOf(),
    location: 'Smpringvale',
    name: 'e',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 11,
    employee: {
      firstName: 'tStact',
      lastName: 'hBartzena'
    },
    date: moment().subtract(6, 'days').valueOf(),
    location: 'Svpringvale',
    name: 'p',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 12,
    employee: {
      firstName: 'vStact',
      lastName: 'weBartzena'
    },
    date: moment().subtract(7, 'days').valueOf(),
    location: 'Supringvale',
    name: 'v',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 13,
    employee: {
      firstName: 'egrStact',
      lastName: 'kgBartzena'
    },
    date: moment().subtract(8, 'days').valueOf(),
    location: 'Sopringvale',
    name: 'u',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 14,
    employee: {
      firstName: 'bStact',
      lastName: 'aewrBartzena'
    },
    date: moment().subtract(9, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'x',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 15,
    employee: {
      firstName: 'wStact',
      lastName: 'liBartzena'
    },
    date: moment().subtract(10, 'days').valueOf(),
    location: 'Shpringvale',
    name: 'p',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 16,
    employee: {
      firstName: 'fjhStact',
      lastName: 'wtBartzena'
    },
    date: moment().subtract(11, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'd',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 17,
    employee: {
      firstName: 'eyStact',
      lastName: 'hrgBartzena'
    },
    date: moment().subtract(12, 'days').valueOf(),
    location: 'Srpringvale',
    name: 'm',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 18,
    employee: {
      firstName: 'qrStact',
      lastName: 'uktBartzena'
    },
    date: moment().subtract(13, 'days').valueOf(),
    location: 'Sbpringvale',
    name: 'e',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 19,
    employee: {
      firstName: 'rgStact',
      lastName: 'aedrBartzena'
    },
    date: moment().subtract(14, 'days').valueOf(),
    location: 'Sqpringvale',
    name: 'n',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 20,
    employee: {
      firstName: 'sgStact',
      lastName: 'hsgrBartzena'
    },
    date: moment().subtract(15, 'days').valueOf(),
    location: 'Skpringvale',
    name: 'e',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
    status: 'approved'
  },
  {
    _id: 21,
    employee: {
      firstName: 'aeStact',
      lastName: 'nmbBartzena'
    },
    date: moment().subtract(16, 'days').valueOf(),
    location: 'Sbpringvale',
    name: 'w',
    startTime: Math.floor(Math.random() * 1140),
    endTime: Math.floor(Math.random() * 1140),
    standardMinutes: Math.floor(Math.random() * 200),
    overtimeMinutes: Math.floor(Math.random() * 200),
    doubleTimeMinutes: Math.floor(Math.random() * 200),
    totalPay: Math.floor(Math.random() * 25000),
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
    id: 2,
    overtimeMultiplier: 1.5,
    doubleTimeMultiplier: 2
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