export function withMethodsGuard(methods: string[]) {
  return function withMethodsGuardHandler(req: any, res: any) {
    if (methods.includes(req.method)) {
      return;
    } else {
      res.status(405).json({
        error: 'Method not allowed',
      });
    }
  };
}
