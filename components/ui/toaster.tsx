"use client"

import {
  useToast,
  Box,
  Portal,
  Spinner,
  Stack,
  Text,
  CloseButton,
  useColorModeValue
} from "@chakra-ui/react"
import { useEffect } from "react"

// Create a custom toaster interface
export const toaster = {
  success: (title: string, description?: string) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'success', title, description }
    }))
  },
  error: (title: string, description?: string) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'error', title, description }
    }))
  },
  warning: (title: string, description?: string) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'warning', title, description }
    }))
  },
  info: (title: string, description?: string) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'info', title, description }
    }))
  },
  loading: (title: string, description?: string) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'loading', title, description }
    }))
  }
}

export const Toaster = () => {
  const toast = useToast()
  const bgColor = useColorModeValue('white', 'gray.800')
  
  useEffect(() => {
    const handleToast = (event: Event) => {
      const { type, title, description } = (event as CustomEvent).detail
      
      toast({
        title,
        description,
        status: type === 'loading' ? 'info' : type,
        duration: type === 'loading' ? null : 5000,
        isClosable: true,
        position: "bottom-right",
        render: ({ onClose }) => (
          <Box 
            p={4} 
            bg={bgColor} 
            borderRadius="md" 
            boxShadow="md"
            width={{ base: "full", md: "sm" }}
          >
            <Stack direction="row" alignItems="center" spacing={3}>
              {type === 'loading' ? (
                <Spinner size="sm" color="blue.500" />
              ) : null}
              <Stack flex="1" maxWidth="100%">
                {title && <Text fontWeight="bold">{title}</Text>}
                {description && <Text fontSize="sm">{description}</Text>}
              </Stack>
              <CloseButton size="sm" onClick={onClose} />
            </Stack>
          </Box>
        )
      })
    }
    
    window.addEventListener('toast', handleToast)
    return () => window.removeEventListener('toast', handleToast)
  }, [toast, bgColor])

  return null
}
