import { useCustomRouter } from "@/hooks/useCustomRouter";
import { useRouter, useSearchParams } from "next/navigation";

// Mocking Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('useCustomRouter', () => {
  const pushMock = jest.fn();
  const searchParamsMock = new URLSearchParams("a=1&b=2");

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    (useSearchParams as jest.Mock).mockReturnValue(searchParamsMock);
    pushMock.mockReset();
  });

  it('should navigate to a new URL without preserving query parameters', () => {
    const { push } = useCustomRouter();
    push('/home/1');
    expect(pushMock).toHaveBeenCalledWith('/home/1', undefined);
  });

  it('should navigate to a new URL and preserve query parameters', () => {
    const { push } = useCustomRouter();
    push('/home/1', { preserveQuery: true });
    expect(pushMock).toHaveBeenCalledWith('/home/1?a=1&b=2', undefined);
  });
});
