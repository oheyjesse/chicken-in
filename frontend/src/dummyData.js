import moment from 'moment'

const dummyShifts = [
  {
    id: 1,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(1, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'rejected'
  },
  {
    id: 2,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(2, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'pending'
  },
  {
    id: 3,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(3, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 4,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(4, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'pending'
  },
  {
    id: 5,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().add(0, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 6,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(1, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'pending'
  },
  {
    id: 7,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(2, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 8,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(3, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'pending'
  },
  {
    id: 9,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(4, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'rejected'
  },
  {
    id: 10,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(5, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 11,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(6, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 12,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(7, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 13,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(8, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 14,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(9, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 15,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(10, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 16,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(11, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 17,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(12, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 18,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(13, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 19,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(14, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 20,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(15, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
    status: 'approved'
  },
  {
    id: 21,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: moment().subtract(16, 'days').valueOf(),
    location: 'Springvale',
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000,
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
    business: {
      type: 2,
      ref: 'Business'
    }
  },
  {
    id: 91,
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'robert@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale' ],
    standardRate: 1000, // cents
    business: {
      type: 2,
      ref: 'Business'
    }
  },
  {
    id: 92,
    firstName: 'Trent',
    lastName: 'Reznor',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Sunshine' ],
    standardRate: 3000, // cents
    business: {
      type: 2,
      ref: 'Business'
    }
  },
  {
    id: 93,
    firstName: 'Kurt',
    lastName: 'Cobain',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 4000, // cents
    business: {
      type: 2,
      ref: 'Business'
    }
  },
  {
    id: 94,
    firstName: 'Billy',
    lastName: 'Kogan',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 500, // cents
    business: {
      type: 2,
      ref: 'Business'
    }
  },
  {
    id: 95,
    firstName: 'Thom',
    lastName: 'Yorke',
    email: 'steve@redrocks.com',
    password: 'supersecretpassword', // randomly generate a password upon creation and send emial to employee
    locations: [ 'Springvale', 'Hobart', 'Sunshine' ],
    standardRate: 2200, // cents
    business: {
      type: 2,
      ref: 'Business'
    }
  }
]

export { dummyShifts, dummyEmployee, dummyData }

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