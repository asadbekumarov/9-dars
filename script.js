console.log("start");

// homework
// Object.keys(), Object.values(), va Object.entries()  dan foydalanib consolda koring

// 1.1-Object.keys()

// console.group("product keyslari");
// const product = {
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics",
//   stock: 25,
// };
// let products = Object.keys(product);
// console.log(products);
// console.table(products);
// console.groupEnd(keys);

// 1.2-Object.values()

// console.group("product keyslari");
// const product = {
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics",
//   stock: 25,
// };
// let products = Object.values(product);
// console.log(products);
// console.table(products);
// console.groupEnd();

// 1.3-Object.entries()

// console.group("product qiymatlari");
// const product = {
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics",
//   stock: 25,
// };
// let products = Object.entries(product);
// console.log(products);
// console.table(products);
// console.groupEnd();

// 2-
// ushbu arrayni hosil qiling [name0,price1,category2,stock3]

// console.group("product qiymatlari");
// const product = {
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics",
//   stock: 25,
// };
// const products = Object.keys(product).map((key, inx) => `${key}${inx}`);
// console.log(products);
// console.table(products);
// console.groupEnd();

// 3-
// barcha qiylatlar yigindisini topuvchi kod yozing

// console.group("product qiymatlari");
// let prices = {
//   first: 1200,
//   second: 2500,
//   third: 3000,
//   fourth: 4500,
//   fifth: 6000,
// };
// let foo = Object.values(prices).reduce((acc, values) => acc + values + 0);
// console.log(foo);
// console.groupEnd();

// 4-
// user objectini yarating va confirmda userdan ushbu object freeze bolishi kkmi yoki yoqligini sorang
// ha deyilsa uni muzlating aks holda yoq

// let user;
// if (confirm("ushbu object freeze bolishi kerakmi yoki yoq")) {
//   let user = {
//     name: "John Doe",
//     age: 30,
//     address: "london",
//     street: "qatortol",
//   };
//   console.warn("SIZ baribir o'zgartira olmaysiz !!freeze!! QILINGAN");

//   Object.freeze(user);
//   user.age = 33;
//   console.log(user);
// } else {
//   let user = {
//     name: "John Doe",
//     age: 30,
//     address: "london",
//     street: "qatortol",
//   };
//   console.warn(
//     "Siz bu object bilan qoshish olish va o'zgartirsh ammalarini bajara olasiz"
//   );
//   console.log(user);
//   user.age = 33;
// }

// 5-
// desturacturing faqat object
// const company = {
//   name: "Global Tech Solutions",
//   headquarters: {
//     address: {
//       street: "789 Innovation Blvd",
//       city: "Tech City",
//       state: {
//         name: "Innovatia",
//         code: "IN",
//       },
//       country: {
//         name: "Technoland",
//         code: "TN",
//       },
//     },
//     offices: {
//       northAmerica: {
//         regionalHead: "Ms. Susan Clarke",
//         contact: {
//           phone: "456-789-1234",
//           email: "susan@globaltech.com",
//         },
//         departments: {
//           software: {
//             head: "Mr. John Doe",
//             teamLead: {
//               name: "Ms. Alice Johnson",
//               contact: {
//                 email: "alice@globaltech.com",
//                 phone: "456-123-7890",
//               },
//             },
//           },
//           hr: {
//             head: "Mrs. Sarah Connors",
//             teamLead: {
//               name: "Mr. Bruce Wayne",
//               contact: {
//                 email: "bruce@globaltech.com",
//                 phone: "456-456-7899",
//               },
//             },
//           },
//         },
//       },
//       europe: {
//         regionalHead: "Mr. Liam O'Sullivan",
//         contact: {
//           phone: "789-456-3210",
//           email: "liam@globaltech.com",
//         },
//         departments: {
//           marketing: {
//             head: "Ms. Natasha Romanoff",
//             teamLead: {
//               name: "Mr. Steve Rogers",
//               contact: {
//                 email: "steve@globaltech.com",
//                 phone: "123-321-4567",
//               },
//             },
//           },
//           finance: {
//             head: "Mr. Tony Stark",
//             teamLead: {
//               name: "Ms. Pepper Potts",
//               contact: {
//                 email: "pepper@globaltech.com",
//                 phone: "987-654-3210",
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   staff: {
//     CEO: {
//       name: "Mr. Elon Musk",
//       experience: "20 years",
//       contact: {
//         email: "elon@globaltech.com",
//         phone: "999-888-7777",
//       },
//     },
//     executives: {
//       CTO: {
//         name: "Ms. Sheryl Sandberg",
//         experience: "18 years",
//         contact: {
//           email: "sheryl@globaltech.com",
//           phone: "555-555-5555",
//         },
//       },
//       CFO: {
//         name: "Mr. Warren Buffett",
//         experience: "25 years",
//         contact: {
//           email: "warren@globaltech.com",
//           phone: "444-444-4444",
//         },
//       },
//     },
//   },
// };

// let {
//   name,
//   headquarters: {
//     address: {
//       street,
//       city,
//       state: {
//         name: name1,
//         code,
//         country: {
//           name: name2,
//           code: code1,
//           offices: {
//             northAmerica,
//             regionalHead,
//             contact: {
//               phone,
//               email,
//               departments,
//               software,
//               head,
//               teamLead,
//               name: name3,
//               contact: {
//                 email: email1,
//                 phone: phone1,
//                 hr: {
//                   head: head1,
//                   teamLead: teamLead1,
//                   teamLead1: {
//                     name: name4,
//                     contact: {
//                       email: email2,
//                       phone: phone2,
//                       phone2: {
//                         europe: {
//                           regionalHead: regionalHead1,
//                           contact: {
//                             phone: phone3,
//                             email: email3,
//                             departments: departments1,
//                             departments1: {
//                               marketing,
//                               name: name5,
//                               teamLead: teamLead2,
//                               teamLead2: {
//                                 name: name6,
//                                 contact: {
//                                   email: email4,
//                                   phone: phone4,
//                                   finance: {
//                                     head: head2,
//                                     teamLead: teamLead3,
//                                     teamLead3: {
//                                       name: name7,
//                                       contact: {
//                                         email: email5,
//                                         phone: phone5,
//                                         staff: {
//                                           CEO: {
//                                             name: name8,
//                                             experience,
//                                             contact: {
//                                               email: email6,
//                                               phone: phone6,
//                                               executives: {
//                                                 CTO: {
//                                                   name: name9,
//                                                   experience: experience1,
//                                                   contact: {
//                                                     email: email7,
//                                                     phone: phone7,
//                                                     CFO: {
//                                                       name: name10,
//                                                       experience: experience2,
//                                                       contact: {
//                                                         email: email8,
//                                                         phone: phone8,
//                                                       },
//                                                     },
//                                                   },
//                                                 },
//                                               },
//                                             },
//                                           },
//                                         },
//                                       },
//                                     },
//                                   },
//                                 },
//                               },
//                             },
//                           },
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// } = company;

// desturacturing  object va array

const eCommerceStore = {
  storeName: "Tech Market",
  location: {
    country: "Shopland",
    city: "Retail City",
    address: {
      street: "456 Commerce St",
      zipCode: "45678",
    },
    departments: [
      {
        name: "Electronics",
        head: "Alice Johnson",
        products: [
          {
            id: 1,
            name: "Laptop",
            brand: "TechBrand",
            specs: {
              processor: "Intel i7",
              memory: "16GB",
              storage: "512GB SSD",
            },
            price: 1200,
            stock: {
              available: 35,
              reserved: 5,
            },
          },
          {
            id: 2,
            name: "Smartphone",
            brand: "PhoneCorp",
            specs: {
              processor: "Snapdragon 888",
              memory: "8GB",
              storage: "128GB",
            },
            price: 900,
            stock: {
              available: 100,
              reserved: 20,
            },
          },
        ],
      },
      {
        name: "Home Appliances",
        head: "Bob Smith",
        products: [
          {
            id: 3,
            name: "Refrigerator",
            brand: "HomeCool",
            specs: {
              capacity: "300L",
              energyRating: "4 stars",
            },
            price: 800,
            stock: {
              available: 10,
              reserved: 2,
            },
          },
          {
            id: 4,
            name: "Washing Machine",
            brand: "CleanIt",
            specs: {
              capacity: "7kg",
              type: "Front Load",
            },
            price: 600,
            stock: {
              available: 15,
              reserved: 3,
            },
          },
        ],
      },
    ],
  },
  employees: {
    managers: [
      {
        name: "John Doe",
        department: "Electronics",
        contact: {
          phone: "123-456-7890",
          email: "john@techmarket.com",
        },
      },
      {
        name: "Jane Smith",
        department: "Home Appliances",
        contact: {
          phone: "321-654-0987",
          email: "jane@techmarket.com",
        },
      },
    ],
    sales: [
      {
        name: "Tom Hardy",
        department: "Electronics",
        contact: {
          phone: "111-222-3333",
          email: "tom@techmarket.com",
        },
      },
      {
        name: "Emily Blunt",
        department: "Home Appliances",
        contact: {
          phone: "444-555-6666",
          email: "emily@techmarket.com",
        },
      },
    ],
  },
  promotions: {
    current: [
      {
        id: "PROMO1",
        name: "Spring Sale",
        discount: "10%",
        applicableProducts: [1, 2],
      },
      {
        id: "PROMO2",
        name: "Summer Clearance",
        discount: "15%",
        applicableProducts: [3, 4],
      },
    ],
    upcoming: [
      {
        id: "PROMO3",
        name: "Fall Sale",
        discount: "20%",
        applicableProducts: [1, 4],
      },
    ],
  },
  orderHistory: [
    {
      orderId: "ORD001",
      customer: {
        name: "Michael Scott",
        contact: {
          phone: "123-789-4560",
          email: "michael@dundermifflin.com",
        },
      },
      items: [
        {
          productId: 1,
          quantity: 1,
          pricePerUnit: 1200,
        },
        {
          productId: 3,
          quantity: 2,
          pricePerUnit: 800,
        },
      ],
      totalAmount: 2800,
      status: "Delivered",
    },
    {
      orderId: "ORD002",
      customer: {
        name: "Pam Beesly",
        contact: {
          phone: "456-123-7890",
          email: "pam@dundermifflin.com",
        },
      },
      items: [
        {
          productId: 2,
          quantity: 1,
          pricePerUnit: 900,
        },
      ],
      totalAmount: 900,
      status: "Pending",
    },
  ],
};

let {
  storeName,
  location: {
    country,
    city,
    address: { street, zipCode },
    departments: [
      {
        name,
        head,
        products: [
          {
            id,
            name: name1,
            brand,
            specs: {
              processor,
              memory,
              storage,
              price,
              stock: {
                available,
                reserved,
                id: id1,
                name: name2,
                brand: brand1,
                specs: {
                  processor: processor1,
                  memory: memory1,
                  storage: storage1,
                  price: price1,
                  stock: stock1,
                  stock1: {
                    available: available1,
                    reserved: reserved1,
                    name: name3,
                    head: head1,
                    products: [
                      {
                        id: id2,
                        name: name4,
                        brand: brand2,
                        specs: {
                          capacity,
                          energyRating,
                          price: price2,
                          stock: stock2,
                          stock2: {
                            available: available2,
                            reserved: reserved2,
                            id: id3,
                            name: name5,
                            brand: brand3,
                            specs: {
                              capacity: capacity1,
                              type,
                              price: price3,
                              stock,
                              stock: {
                                available: available3,
                                reserved: reserved3,
                                employees: {
                                  managers: [
                                    {
                                      name: name6,
                                      department,
                                      contact: {
                                        phone,
                                        email,
                                        name: name7,
                                        department: department1,
                                        contact: {
                                          phone: phone8,
                                          email: email1,
                                          sales: [
                                            {
                                              name: name10,
                                              department: department2,
                                              contact: {
                                                phone: phone1,
                                                email: email2,
                                                name: name11,
                                                department: department3,
                                                contact: {
                                                  phone: phone3,
                                                  email: email3,
                                                  promotions: {
                                                    current: [
                                                      {
                                                        id: id4,
                                                        name: name12,
                                                        discount,
                                                        applicableProducts,
                                                        id: id5,
                                                        name: name13,
                                                        discount: discount1,
                                                        applicableProducts:
                                                          applicableProducts1,
                                                        upcoming: [
                                                          {
                                                            id: id6,
                                                            name: name14,
                                                            discount: discount2,
                                                            applicableProducts:
                                                              applicableProducts2,
                                                            orderHistory: [
                                                              {
                                                                orderId,
                                                                customer: {
                                                                  name: name15,
                                                                  contact: {
                                                                    phone:
                                                                      phone2,
                                                                    email:
                                                                      email4,
                                                                    items: [
                                                                      {
                                                                        productId,
                                                                        quantity,
                                                                        pricePerUnit,
                                                                        productId:
                                                                          productId1,
                                                                        quantity:
                                                                          quantity1,
                                                                        pricePerUnit:
                                                                          pricePerUnit1,
                                                                        totalAmount,
                                                                        status,
                                                                        orderId:
                                                                          orderId2,
                                                                        customer:
                                                                          {
                                                                            name: nam16,
                                                                            contact:
                                                                              {
                                                                                phone:
                                                                                  phone4,
                                                                                email:
                                                                                  email5,
                                                                                items:
                                                                                  [
                                                                                    {
                                                                                      productId:
                                                                                        productId2,
                                                                                      quantity:
                                                                                        quantity2,
                                                                                      pricePerUnit:
                                                                                        pricePerUnit2,
                                                                                      totalAmount:
                                                                                        totalAmount1,
                                                                                      status:
                                                                                        status1,
                                                                                    },
                                                                                  ],
                                                                              },
                                                                          },
                                                                      },
                                                                    ],
                                                                  },
                                                                },
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
} = eCommerceStore;

// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------

console.warn("end");
