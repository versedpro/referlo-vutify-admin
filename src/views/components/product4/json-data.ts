const industries = [
  {
    industryId: 1,
    industryName: "Telecom",
    rank: 1,
    products: [
      {
        productName: "Broadband",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 1
      },
      {
        productName: "Telephone line",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 2
      },
      {
        productName: "Nowtv",
        supplierId: 1,
        supplierName: "PCCW",
        points: 80,
        rank: 3
      },
      {
        productName: "Broadband",
        supplierId: 2,
        supplierName: "HKBN",
        points: 80,
        rank: 4
      },
      {
        productName: "Telephone line",
        supplierId: 2,
        supplierName: "HKBN",
        points: 80,
        rank: 5
      },
      {
        productName: "Telephone line",
        supplierId: 1,
        supplierName: "Nowtv",
        points: 80,
        rank: 6
      }
    ]
  },
  {
    industryId: 2,
    industryName: "ePayment",
    rank: 2,
    products: [
      {
        productName: "MSL Visa Epayment",
        supplierId: 5,
        supplierName: "MSL",
        points: 600,
        rank: 1
      },
      {
        productName: "EFT Visa / Master",
        supplierId: 6,
        supplierName: "EFT",
        points: null,
        rank: 2
      },
      {
        productName: "AMEX Payment",
        supplierId: 11,
        supplierName: "AMEX",
        points: 300,
        rank: 3
      }
    ]
  },
  {
    industryId: 3,
    industryName: "F & B Service",
    points: 200,
    displayOrder: 3,
    products: [
      {
        productName: "Takeaway",
        supplierId: 10,
        supplierName: "Openrice",
        points: 200,
        rank: 1
      },
      {
        productName: "Voucher",
        supplierId: 10,
        supplierName: "Openrice",
        points: 100,
        rank: 2
      },
      {
        productName: "Table Booking",
        supplierId: 10,
        supplierName: "Openrice",
        points: 100,
        rank: 3
      },
      {
        productName: "ChargePot 充電服務",
        supplierId: 4,
        supplierName: "ChargePot",
        points: 100,
        rank: 4
      }
    ]
  },
  {
    industryId: 4,
    industryName: "Business Service",
    points: 300,
    displayOrder: 4,
    products: [
      {
        productName: "Insurance",
        supplierId: 3,
        supplierName: "Business service",
        points: 280,
        rank: 1
      },
      {
        productName: "Account / audit",
        supplierId: 3,
        supplierName: "Business service",
        points: 280,
        rank: 2
      }
    ]
  }
];

export { industries };
