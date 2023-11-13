import { Request, Response } from 'express';

const getCustInfo = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        key: 99,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '120',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 98,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '120',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 97,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 96,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 95,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 94,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 93,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 92,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 91,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 90,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 89,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 88,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 87,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 86,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 85,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 84,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 83,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 82,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 81,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '0', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
      {
        key: 80,
        cust_name: '深圳大可龙贸易有限公司',
        desc: '这是一段描述',
        speed: '50M',
        status: '1', //0:禁用；1：启用
        startDate: '2023-10-22',
        endDate: '2024-10-21',
        route: '美国/日本/英国',
      },
    ],
  });
};

export default {
  'GET /api/customer/information': getCustInfo,
};
