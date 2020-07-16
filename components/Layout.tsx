import React, { useState } from 'react'

import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'
import navConfig from '../utils/navigation-helpers'

export default function Layout (props : any) {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      {
        isMobile ? (
          <MobileLayout>
            <h3>Mobile Layout</h3>
            {props.children}
          </MobileLayout>
        ) : (
        <DesktopLayout navConfig={navConfig}>
          <h3>Desktop Layout</h3>
          {props.children}
        </DesktopLayout>
        )
      }

      <button
        type='button'
        onClick={() => { console.log('toggled mobile to ', !isMobile); setIsMobile(!isMobile)}}
        style={{marginTop: '10em'}}
      >
        mobile mode is { isMobile ? 'on' : 'off' }
      </button>
    </>
  )
}