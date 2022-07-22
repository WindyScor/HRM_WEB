export const Account = {
    data: [
        {
            id: 1,
            email: "WindScorpion@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }, {
                name: "Admin",
                id: 2
            }]
            ,
            active: true,
            idProfile: 1,
        },
        {
            id: 2,
            email: "WindScorpion1@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }]
            ,
            active: true,
            profile: {
                name: "WindScorpion11",
                birthday: "00-00-0000",
                gender: "Male",
                phone: "0123456789",
                address: "Một nơi nào đó trên đời",
                referralCode: "Wind711",
                presenter: "Nobody",
            },
        },
        {
            id: 3,
            email: "WindScorpion2@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }]
            ,
            active: true,
            profile: {
                name: "WindScorpion1",
                birthday: "00-00-0000",
                gender: "Male",
                phone: "0123456789",
                address: "Một nơi nào đó trên đời",
                referralCode: "Wind711",
                presenter: "Nobody",
            },
        },
        {
            id: 4,
            email: "WindScorpion@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }]
            ,
            active: true,
            profile: {
                name: "WindScorpion1qqqwrg",
                birthday: "00-00-0000",
                gender: "Male",
                phone: "0123456789",
                address: "Một nơi nào đó trên đời",
                referralCode: "Wind711",
                presenter: "Nobody",
            },
        },
        {
            id: 5,
            email: "WindScorpion@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }]
            ,
            active: true,
            profile: {
                name: "WindScorpionklksdjfdkjsalkfas",
                birthday: "00-00-0000",
                gender: "Male",
                phone: "0123456789",
                address: "Một nơi nào đó trên đời",
                referralCode: "Wind711",
                presenter: "Nobody",
            },
        },
        {
            id: 6,
            email: "WindScorpion@gmail.com",
            role: [{
                name: "Hr",
                id: 1
            }]
            ,
            active: true,
            profile: {
                name: "WindScorpion",
                birthday: "00-00-0000",
                gender: "Male",
                phone: "0123456789",
                address: "Một nơi nào đó trên đời",
                referralCode: "Wind711",
                presenter: "Nobody",
            },
        },
    ],
    totalPages: 5
};


export const Role = {
    data: [
        {
            id: 1,
            name: "Hr",
            permission: [{
                id: 1,
                name: "Hr",
                description: "Thinh ml",
            },
            {
                id: 2,
                name: "Hr2",
                description: "Thinh ml",
            },],
        },
        {
            id: 2,
            name: "Hr2",
            permission: [{
                id: 3,
                name: "Hr3",
                description: "Thinh ml",
            },
            {
                id: 4,
                name: "Hr4",
                description: "Thinh ml",
            }],
        },
        {
            id: 3,
            name: "Hr3",
            permission: [{
                id: 2,
                name: "Hr2",
                description: "Thinh ml",
            },
            {
                id: 3,
                name: "Hr3",
                description: "Thinh ml",
            }],
        },
        {
            id: 4,
            name: "Hr4",
            permission: [{
                id: 2,
                name: "Hr2",
                description: "Thinh ml",
            },
            {
                id: 3,
                name: "Hr3",
                description: "Thinh ml",
            }],
        },
        {
            id: 5,
            name: "Hr5",
            permission: [{
                id: 5,
                name: "Hr5",
                description: "Thinh ml",
            }],
        },
    ],
    totalPages: 5
}

export const Permission = {
    data: [
        {
            id: 1,
            name: "Hr",
            description: "Thinh ml",
        },
        {
            id: 2,
            name: "Hr2",
            description: "Thinh ml",
        },
        {
            id: 3,
            name: "Hr3",
            description: "Thinh ml",
        },
        {
            id: 4,
            name: "Hr4",
            description: "Thinh ml",
        },
        {
            id: 5,
            name: "Hr5",
            description: "Thinh ml",
        },
    ],
    totalPages: 5
}

export const profile = {
    id: 1,
    name: "WindScorpion",
    birthday: "00-00-0000",
    gender: "Male",
    phone: "0123456789",
    address: "Một nơi nào đó trên đời",
    referralCode: "Wind711",
    presenterCode: "Nobody",
}