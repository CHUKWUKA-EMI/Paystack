import * as axios from "axios";
class Paystack {
  private axiosFetch = axios.default;
  private secretKey: string;
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }
  async resolveAccountNumber(account_number: string, bank_code: string) {
    const url = `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`;

    try {
      const response = await this.axiosFetch.get(url, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async resolveCard(cardNumber: number) {
    const url = `https://api.paystack.co/decision/bin/${cardNumber}`;
    try {
      const response = await this.axiosFetch.get(url, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }
  async createPlan(name: string, interval: string, amount: number) {
    const url = "https://api.paystack.co/plan";
    const payload = { name: name, interval: interval, amount: amount * 100 };

    try {
      const response = await this.axiosFetch.post(url, payload, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async fetchPlan(plan_code: string) {
    const url = `https://api.paystack.co/plan/${plan_code}`;

    try {
      const response = await this.axiosFetch.get(url, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async updatePlan(
    plan_code: string,
    name: string,
    interval: string,
    amount: number
  ) {
    const url = `https://api.paystack.co/plan/${plan_code}`;

    const payload = { name: name, interval: interval, amount: amount * 100 };

    try {
      const response = await this.axiosFetch.put(url, payload, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async createSubscription(
    email: string,
    amount: number,
    reference: string,
    plan_code: string,
    invoice_limit: number
  ) {
    const url = "https://api.paystack.co/transaction/initialize";
    const payload = {
      email: email,
      amount: amount * 100,
      reference: reference,
      plan: plan_code,
      invoice_limit: invoice_limit,
    };
    try {
      const response = await this.axiosFetch.post(url, payload, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async initializeTransaction(
    email: string,
    amount: number,
    reference: string
  ) {
    const url = "https://api.paystack.co/transaction/initialize";
    const payload = {
      email: email,
      amount: amount * 100,
      reference: reference,
    };

    try {
      const response = await this.axiosFetch.post(url, payload, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });

      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }

  async verifyPayment(reference: string) {
    const url = `https://api.paystack.co/transaction/verify/${reference}`;
    try {
      const response = await this.axiosFetch.get(url, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });
      const { status, statusText, data } = response;
      return { status: status, message: statusText, data: data };
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
        data: {},
      };
    }
  }
}

export default Paystack;
