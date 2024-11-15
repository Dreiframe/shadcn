import { ModeSwitch } from '../components/mode-toggle'


export function SiteHeader() {
    const infin = false
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="flex h-14 items-center px-4">
                <div className='mr-4 md:flex'>
                    <h1 className='text-lg font-semibold'>Korkeus3D</h1>
                </div>

                <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
                    <div className='w-full flex-1'/>

                    <a href='documentation' className='text-sm font-semibold text-muted-foreground hover:text-foreground'>
                        {infin ? 'dokumentaatio' : 'documentation'}
                    </a>

                    <ModeSwitch/>
                </div>
            </div>
        </header>
    )
}