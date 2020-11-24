const industries = [
  {
    industryId: 1,
    name: {
      en: "Telecom",
      zh_CN: "电讯",
      zh_HK: "電訊"
    },
    industryName: "Telecom",
    rank: 1,
    products: [
      {
        productName: "Broadband",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 1,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Telephone line",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 2,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Nowtv",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 3,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Broadband",
        supplierId: 2,
        supplierName: "HKBN",
        points: 80,
        rank: 4,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Telephone line",
        supplierId: 2,
        supplierName: "HKBN",
        points: 80,
        rank: 5,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Telephone line",
        supplierId: 1,
        supplierName: "Nowtv",
        points: 80,
        rank: 6,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  },
  {
    industryId: 2,
    name: {
      en: "ePayment",
      zh_CN: "电子支付",
      zh_HK: "電子支付"
    },
    industryName: "ePayment",
    rank: 2,
    products: [
      {
        productName: "MSL Visa Epayment",
        supplierId: 5,
        supplierName: "MSL",
        points: 600,
        rank: 1,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "EFT Visa / Master",
        supplierId: 6,
        supplierName: "EFT",
        points: null,
        rank: 2,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "AMEX Payment",
        supplierId: 11,
        supplierName: "AMEX",
        points: 300,
        rank: 3,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  },
  {
    industryId: 3,
    name: {
      en: "F & B Service",
      zh_CN: "餐饮服务",
      zh_HK: "餐飲服務"
    },
    industryName: "F & B Service",
    points: 200,
    displayOrder: 3,
    products: [
      {
        productName: "Takeaway",
        supplierId: 10,
        supplierName: "Openrice",
        points: 200,
        rank: 1,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Voucher",
        supplierId: 10,
        supplierName: "Openrice",
        points: 100,
        rank: 2,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Table Booking",
        supplierId: 10,
        supplierName: "Openrice",
        points: 100,
        rank: 3,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "ChargePot 充電服務",
        supplierId: 4,
        supplierName: "ChargePot",
        points: 100,
        rank: 4,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  },
  {
    industryId: 4,
    name: {
      en: "Business Service",
      zh_CN: "商业服务",
      zh_HK: "商業服務"
    },
    industryName: "Business Service",
    points: 300,
    displayOrder: 4,
    products: [
      {
        productName: "Insurance",
        supplierId: 3,
        supplierName: "Business service",
        points: 280,
        rank: 1,
        src: "/img/products/csl1.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        productName: "Account / audit",
        supplierId: 3,
        supplierName: "Business service",
        points: 280,
        rank: 2,
        src: "/img/products/csl2.png",
        productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  }
];

export { industries };
