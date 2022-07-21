export default function withMethodsGuard(methods: string[]) {
    return function withMethodsGuardHandler(req: any, res: any, next: any) {
        if (methods.includes(req.method)) {
            next()
        } else {
            res.status(405).json({
                error: 'Method not allowed'
            })
        }
    }
}
