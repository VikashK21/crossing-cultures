import React from 'react'

export default function Resources() {
    return (
        <>
            {
                (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#maghizhan')) && <section>
                    Maghizhan Resource
                </section>
            }
            {
                (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#rhea')) && <section>
                    Rhea Resource
                </section>
            }
            {
                (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#aishupriya')) && <section>
                    Aishupriya Resource
                </section>
            }
            {
                (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#nesara')) && <section>
                    Nesara Resource
                </section>
            }
            {
                (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#vikash')) && <section>
                    Vikash Resource
                </section>
            }
        </>
    )
}
