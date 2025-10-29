// src/data/customers.ts
export type Customer = {
    id: string;
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    avatar?: string;
    createdAt?: string;
};

export const CUSTOMERS: Customer[] = [
    {
        id: "u-1",
        name: "Sara Mohammadi",
        email: "sara@example.com",
        password: "password123", // dev-only
        phone: "+989101935485",
        address: "Tehran, Iran",
        avatar: "",
        createdAt: "2025-01-01"
    },
    {
        id: "u-2",
        name: "Ali Rezaei",
        email: "ali@example.com",
        password: "secret456",
        phone: "+989121935486",
        address: "Shiraz, Iran",
        avatar: "",
        createdAt: "2025-02-14"
    },
    {
        id: "u-3",
        name: "Mina Hashemi",
        email: "mina.hashemi@example.com",
        password: "mina2024",
        phone: "+989131935487",
        address: "Isfahan, Iran",
        avatar: "",
        createdAt: "2024-11-20"
    },
    {
        id: "u-4",
        name: "Mohammad Hosseini",
        email: "mohammad.hosseini@example.com",
        password: "mohammad!1",
        phone: "+989141935488",
        address: "Mashhad, Iran",
        avatar: "",
        createdAt: "2024-12-05"
    },
    {
        id: "u-5",
        name: "Reza Karimi",
        email: "reza.karimi@example.com",
        password: "reza321",
        phone: "+989151935489",
        address: "Tabriz, Iran",
        avatar: "",
        createdAt: "2024-10-10"
    },
    {
        id: "u-6",
        name: "Leila Azimi",
        email: "leila.azimi@example.com",
        password: "leilaPass",
        phone: "+989161935490",
        address: "Karaj, Iran",
        avatar: "",
        createdAt: "2024-09-01"
    },
    {
        id: "u-7",
        name: "Nima Farhadi",
        email: "nima.farhadi@example.com",
        password: "nima2025",
        phone: "+989171935491",
        address: "Qom, Iran",
        avatar: "",
        createdAt: "2024-08-18"
    },
    {
        id: "u-8",
        name: "Zahra Rahimi",
        email: "zahra.rahimi@example.com",
        password: "zahra!89",
        phone: "+989181935492",
        address: "Kermanshah, Iran",
        avatar: "",
        createdAt: "2024-07-22"
    },
    {
        id: "u-9",
        name: "Hossein Ahmadi",
        email: "hossein.ahmadi@example.com",
        password: "hossein007",
        phone: "+989191935493",
        address: "Ahvaz, Iran",
        avatar: "",
        createdAt: "2024-06-30"
    },
    {
        id: "u-10",
        name: "Fatemeh Jafari",
        email: "fatemeh.jafari@example.com",
        password: "fatemeh123",
        phone: "+989101935494",
        address: "Rasht, Iran",
        avatar: "",
        createdAt: "2024-05-12"
    },
    {
        id: "u-11",
        name: "Amir Khosravi",
        email: "amir.khosravi@example.com",
        password: "amirsecure",
        phone: "+989121935495",
        address: "Yazd, Iran",
        avatar: "",
        createdAt: "2024-04-03"
    },
    {
        id: "u-12",
        name: "Negar Sadeghi",
        email: "negar.sadeghi@example.com",
        password: "negar!2024",
        phone: "+989131935496",
        address: "Kerman, Iran",
        avatar: "",
        createdAt: "2024-03-19"
    },
    {
        id: "u-13",
        name: "Pouya Mousavi",
        email: "pouya.mousavi@example.com",
        password: "pouya555",
        phone: "+989141935497",
        address: "Bandar Abbas, Iran",
        avatar: "",
        createdAt: "2024-02-02"
    },
    {
        id: "u-14",
        name: "Somayeh Nezhad",
        email: "somayeh.nezhad@example.com",
        password: "somayeh321",
        phone: "+989151935498",
        address: "Sanandaj, Iran",
        avatar: "",
        createdAt: "2024-01-15"
    },
    {
        id: "u-15",
        name: "Kamran Talebi",
        email: "kamran.talebi@example.com",
        password: "kamran!1",
        phone: "+989161935499",
        address: "Sari, Iran",
        avatar: "",
        createdAt: "2023-12-01"
    },
    {
        id: "u-16",
        name: "Roya Ghanbari",
        email: "roya.ghanbari@example.com",
        password: "roya2024",
        phone: "+989171935500",
        address: "Hamedan, Iran",
        avatar: "",
        createdAt: "2023-11-09"
    },
    {
        id: "u-17",
        name: "Behzad Kaveh",
        email: "behzad.kaveh@example.com",
        password: "behzad888",
        phone: "+989181935501",
        address: "Zanjan, Iran",
        avatar: "",
        createdAt: "2023-10-20"
    },
    {
        id: "u-18",
        name: "Parisa Miri",
        email: "parisa.miri@example.com",
        password: "parisa!45",
        phone: "+989191935502",
        address: "Ardabil, Iran",
        avatar: "",
        createdAt: "2023-09-14"
    },
    {
        id: "u-19",
        name: "Kian Shirazi",
        email: "kian.shirazi@example.com",
        password: "kian2024",
        phone: "+989101935503",
        address: "Gorgan, Iran",
        avatar: "",
        createdAt: "2023-08-07"
    },
    {
        id: "u-20",
        name: "Laleh Pour",
        email: "laleh.pour@example.com",
        password: "laleh!99",
        phone: "+989121935504",
        address: "Khorramabad, Iran",
        avatar: "",
        createdAt: "2023-07-01"
    },
    {
        id: "u-21",
        name: "Hamed Eskandari",
        email: "hamed.eskandari@example.com",
        password: "hamed_pass",
        phone: "+989131935505",
        address: "Behbahan, Iran",
        avatar: "",
        createdAt: "2023-06-18"
    },
    {
        id: "u-22",
        name: "Elham Motamedi",
        email: "elham.motamedi@example.com",
        password: "elham2024",
        phone: "+989141935506",
        address: "Ilam, Iran",
        avatar: "",
        createdAt: "2023-05-05"
    },
    {
        id: "u-23",
        name: "Vahid Ranjbar",
        email: "vahid.ranjbar@example.com",
        password: "vahid777",
        phone: "+989151935507",
        address: "Bojnourd, Iran",
        avatar: "",
        createdAt: "2023-04-22"
    },
    {
        id: "u-24",
        name: "Shirin Etemadi",
        email: "shirin.etemadi@example.com",
        password: "shirin!321",
        phone: "+989161935508",
        address: "Qazvin, Iran",
        avatar: "",
        createdAt: "2023-03-10"
    },
    {
        id: "u-25",
        name: "Arman Parsa",
        email: "arman.parsa@example.com",
        password: "arman2025",
        phone: "+989171935509",
        address: "Zabol, Iran",
        avatar: "",
        createdAt: "2023-02-02"
    },
    {
        id: "u-26",
        name: "Maryam Nouri",
        email: "maryam.nouri@example.com",
        password: "maryam!55",
        phone: "+989181935510",
        address: "Gachsaran, Iran",
        avatar: "",
        createdAt: "2023-01-12"
    },
    {
        id: "u-27",
        name: "Omid Sadat",
        email: "omid.sadat@example.com",
        password: "omid_pass",
        phone: "+989191935511",
        address: "Kish Island, Iran",
        avatar: "",
        createdAt: "2022-12-01"
    },
    {
        id: "u-28",
        name: "Yasaman Azar",
        email: "yasaman.azar@example.com",
        password: "yasaman123",
        phone: "+989101935512",
        address: "Rafsanjan, Iran",
        avatar: "",
        createdAt: "2022-11-10"
    },
    {
        id: "u-29",
        name: "Babak Daryaei",
        email: "babak.daryaei@example.com",
        password: "babak999",
        phone: "+989121935513",
        address: "Amol, Iran",
        avatar: "",
        createdAt: "2022-10-05"
    },
    {
        id: "u-30",
        name: "Shabnam Vahidi",
        email: "shabnam.vahidi@example.com",
        password: "shabnam!7",
        phone: "+989131935514",
        address: "Behshahr, Iran",
        avatar: "",
        createdAt: "2022-09-18"
    }
];
