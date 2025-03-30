"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const text = `
*New Contact from ElectroDUO Website*
*Name:* ${formData.firstName} ${formData.lastName}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Message:* ${formData.message}
    `.trim()

    // Encode the message for a URL
    const encodedText = encodeURIComponent(text)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/5491163604558?text=${encodedText}`, "_blank")

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      whatsapp: "",
      email: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="whatsapp">WhatsApp</Label>
        <Input
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          placeholder="+1234567890"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john.doe@example.com"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Send Message
      </Button>
    </form>
  )
}

