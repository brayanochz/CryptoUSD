import "@testing-library/jest-dom";
import { render, screen, waitFor } from '@testing-library/react';
import Details from '@/app/details/[id]/page';
import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { cryptoDetailMock, marketsMock } from "@/mock/crypto";
import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

// Hacer un mock de CryptocurrencyClient
jest.mock("@/services/CryptocurrencyClient", () => ({
  CryptocurrencyClient: jest.fn().mockImplementation(() => ({
    getCoinDetails: jest.fn().mockResolvedValue(cryptoDetailMock),
  })),
}));

// Hacer un mock del hook useCryptoCurrency
jest.mock("@/hooks/useCryptoCurrency", () => {
  return jest.fn(() => {
    const originalModule = jest.requireActual("@/hooks/useCryptoCurrency");
    return {
      ...originalModule,
      getCoinDetails: jest.fn().mockResolvedValue(cryptoDetailMock),
      getMarkets: jest.fn().mockResolvedValue(marketsMock),
    };
  });
});

const mockParams = {
  params: { id: '90' }
};

describe('Details Component', () => {
  it('renders without crashing', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/Details of Bitcoin \(BTC\)/i)).toBeVisible();
  });

  it('renders the price information correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/\$35\,351\.45/i)).toBeVisible();
  });

  it('renders the 24h change correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/0\.75%/i)).toBeVisible();
  });

  it('renders the 1h change correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/-0\.48%/i)).toBeVisible();
  });

  it('renders the 7d change correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/2\.70%/i)).toBeVisible();
  });

  it('renders the market cap correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/\$688,326,163,100/i)).toBeVisible();
  });

  it('renders the volume (24h) correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/\$16,112,887,740/i)).toBeVisible();
  });

  it('renders the market section correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/Markets/i)).toBeVisible();
  });

  it('renders the market name correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/BingX/i)).toBeVisible();
  });

  it('renders the market base/quote correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/BTC\/USDT/i)).toBeVisible();
  });


  it('renders the market value correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/\$35,330/i)).toBeVisible();
  });


  it('renders the market volume correctly', async () => {
    render(await Details(mockParams))
    expect(screen.getByText(/\$2.266904803B/i)).toBeVisible();
  });

});
